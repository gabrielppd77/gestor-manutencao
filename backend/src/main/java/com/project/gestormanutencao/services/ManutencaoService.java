package com.project.gestormanutencao.services;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.project.gestormanutencao.dto.ManutencaoDTO;
import com.project.gestormanutencao.entities.Manutencao;
import com.project.gestormanutencao.enums.Status;
import com.project.gestormanutencao.repositories.ManutencaoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class ManutencaoService {
    
    @Autowired
    private ManutencaoRepository repository;

    public List<ManutencaoDTO> findAllExceptConcluidas() {
        List<Manutencao> manutencoes = repository.findAllExceptConcluidas();
        return manutencoes.stream().map(x -> new ManutencaoDTO(x)).collect(Collectors.toList());
    }

    public List<ManutencaoDTO> findAllConcluidas() {
        List<Manutencao> manutencoes = repository.findAllConcluidas();
        return manutencoes.stream().map(x -> new ManutencaoDTO(x)).collect(Collectors.toList());
    }

    public ManutencaoDTO findById(Long id){
        Optional<Manutencao> manutencao = repository.findById(id);
        return new ManutencaoDTO(manutencao.get());
    }

    public ManutencaoDTO insert(ManutencaoDTO dto){
        Manutencao manutencao = new Manutencao(dto);
        manutencao.setKm_manutencao(0);
        manutencao.setData_criacao(Instant.now());
        return new ManutencaoDTO(repository.save(manutencao));
    }

    public ManutencaoDTO update(ManutencaoDTO dto, Long id){
        ManutencaoDTO manutencao = findById(id);

        manutencao.setDescricao(dto.getDescricao());
        manutencao.setData_previsao(dto.getData_previsao());
        manutencao.setVeiculo(dto.getVeiculo());
        manutencao.setCondicao_pagamento(dto.getCondicao_pagamento());
        manutencao.setValor_pecas(dto.getValor_pecas());
        manutencao.setValor_servico(dto.getValor_servico());
        manutencao.setStatus(dto.getStatus());
        manutencao.setPrioridade(dto.getPrioridade());

        Manutencao manu = new Manutencao(manutencao);

        return new ManutencaoDTO(repository.save(manu));
    }

    public ManutencaoDTO concludeManutencao(Long id){
        ManutencaoDTO manutencao = findById(id);
        Status status = Status.CONCLUIDA;

        manutencao.setKm_manutencao(manutencao.getVeiculo().getKm());
        manutencao.setData_finalizacao(Instant.now());
        manutencao.setStatus(status);

        Manutencao manu = new Manutencao(manutencao);

        return new ManutencaoDTO(repository.save(manu));
    }

    public void delete(Long id){
        Optional<Manutencao> manutencao = repository.findById(id);
        manutencao.get().setVeiculo(null);
        try {
            repository.save(manutencao.get());
            repository.deleteById(id);
        } catch (Exception e) {
            throw new DataIntegrityViolationException("Erro " + e.getMessage());
        }
    }

}
