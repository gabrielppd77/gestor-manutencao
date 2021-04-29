package com.project.gestormanutencao.repositories;

import com.project.gestormanutencao.entities.Veiculo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
}
