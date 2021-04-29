package com.project.gestormanutencao.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.project.gestormanutencao.dto.ManutencaoDTO;
import com.project.gestormanutencao.dto.VeiculoDTO;
import com.project.gestormanutencao.entities.Veiculo;
import com.project.gestormanutencao.repositories.VeiculoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository repository;

    public List<VeiculoDTO> findAll(){
        List<Veiculo> veiculos = repository.findAll();
        List<VeiculoDTO> veiculosDTO = new ArrayList<VeiculoDTO>();
        for (Veiculo veiculo : veiculos) {
            VeiculoDTO veiculoDTO = new VeiculoDTO(veiculo);
            List<ManutencaoDTO> manutencaoDTO = veiculo.getManutencoes().stream().map(x -> new ManutencaoDTO(x)).collect(Collectors.toList());
            veiculoDTO.setManutencoes(manutencaoDTO);
            veiculosDTO.add(veiculoDTO);
        }
        return veiculosDTO;
    }

    public VeiculoDTO findById(Long id){
        Optional<Veiculo> veiculo = repository.findById(id);
        VeiculoDTO veiculoDTO = new VeiculoDTO(veiculo.get());
        List<ManutencaoDTO> manutencoesDTO = veiculo.get().getManutencoes().stream().map(x -> new ManutencaoDTO(x)).collect(Collectors.toList());
        veiculoDTO.setManutencoes(manutencoesDTO);
        return veiculoDTO;
    }

    public VeiculoDTO insert(VeiculoDTO newDTO) {
        Veiculo newVeiculo = new Veiculo(newDTO);
        newVeiculo.setId(null);
        return new VeiculoDTO(repository.save(newVeiculo));
    }

    public VeiculoDTO update(VeiculoDTO newDTO, Long id){
        VeiculoDTO oldDTO = findById(id);
        
        oldDTO.setAno(newDTO.getAno());
        oldDTO.setChassi(newDTO.getChassi());
        oldDTO.setFabricacao(newDTO.getFabricacao());
        oldDTO.setKm(newDTO.getKm());
        oldDTO.setModelo(newDTO.getModelo());
        oldDTO.setPlaca(newDTO.getPlaca());
        oldDTO.setTipo(newDTO.getTipo());
        oldDTO.setManutencoes(newDTO.getManutencoes());

        Veiculo veiculo = new Veiculo(oldDTO);

        VeiculoDTO saveVeiculoDto = new VeiculoDTO(repository.save(veiculo));
        saveVeiculoDto.setManutencoes(oldDTO.getManutencoes());

        return saveVeiculoDto;
    }

    public void delete(Long id){
        try {
            repository.deleteById(id);
        } catch (Exception e) {
            throw new DataIntegrityViolationException("Veiculo tem associações com uma ou mais manutenções");
        }
    }
}
