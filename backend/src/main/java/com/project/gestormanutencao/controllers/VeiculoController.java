package com.project.gestormanutencao.controllers;

import java.net.URI;
import java.util.List;

import com.project.gestormanutencao.dto.VeiculoDTO;
import com.project.gestormanutencao.services.VeiculoService;

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
@RequestMapping(value = "/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoService service;

    @GetMapping
    public ResponseEntity<List<VeiculoDTO>> findAll(){
        List<VeiculoDTO> veiculos = service.findAll();
        return ResponseEntity.ok().body(veiculos);
    }

    @GetMapping(value = "/details/{id}")
    public ResponseEntity<VeiculoDTO> findById(@PathVariable Long id){
        VeiculoDTO veiculo = service.findById(id);
        return ResponseEntity.ok().body(veiculo);
    }

    @PostMapping(value = "/insert")
    public ResponseEntity<VeiculoDTO> insert(@RequestBody VeiculoDTO newDTO){
        VeiculoDTO veiculo = service.insert(newDTO);
        URI uri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/{id}").buildAndExpand(veiculo.getId()).toUri();
        return ResponseEntity.created(uri).body(veiculo);
    }

    @PutMapping(value = "/update/{id}")
    public ResponseEntity<VeiculoDTO> update(@RequestBody VeiculoDTO dto, @PathVariable Long id){
        VeiculoDTO veiculo = service.update(dto, id);
        return ResponseEntity.ok().body(veiculo);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
