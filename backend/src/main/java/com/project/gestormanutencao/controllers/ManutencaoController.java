package com.project.gestormanutencao.controllers;

import java.net.URI;
import java.util.List;

import com.project.gestormanutencao.dto.ManutencaoDTO;
import com.project.gestormanutencao.services.ManutencaoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping(value = "/manutencoes")
public class ManutencaoController {
    
    @Autowired
    private ManutencaoService service;

    @GetMapping
    public ResponseEntity<List<ManutencaoDTO>> findAllExceptConcluidas() {
        List<ManutencaoDTO> manutencoes = service.findAllExceptConcluidas();
        return ResponseEntity.ok().body(manutencoes);
    }

    @GetMapping(value = "/concluidas")
    public ResponseEntity<List<ManutencaoDTO>> findAllConcluidas() {
        List<ManutencaoDTO> manutencoes = service.findAllConcluidas();
        return ResponseEntity.ok().body(manutencoes);
    }

    @GetMapping(value = "/details/{id}")
    public ResponseEntity<ManutencaoDTO> findById(@PathVariable Long id){
        ManutencaoDTO manutencao = service.findById(id);
        return ResponseEntity.ok().body(manutencao);
    }

    @PostMapping(value = "/insert")
    public ResponseEntity<ManutencaoDTO> insert(@RequestBody ManutencaoDTO dto){
        ManutencaoDTO manutencao = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(manutencao);
    }

    @PutMapping(value = "/update/{id}")
    public ResponseEntity<ManutencaoDTO> update(@RequestBody ManutencaoDTO dto, @PathVariable Long id){
        ManutencaoDTO manutencao = service.update(dto, id);
        return ResponseEntity.ok().body(manutencao);
    }

    @PutMapping(value = "/concluir/{id}")
    public ResponseEntity<ManutencaoDTO> concludeManutencao(@PathVariable Long id){
        ManutencaoDTO manutencao = service.concludeManutencao(id);
        return ResponseEntity.ok().body(manutencao);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
