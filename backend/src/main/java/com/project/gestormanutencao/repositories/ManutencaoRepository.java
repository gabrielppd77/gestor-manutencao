package com.project.gestormanutencao.repositories;

import java.util.List;

import com.project.gestormanutencao.entities.Manutencao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ManutencaoRepository extends JpaRepository<Manutencao, Long> {
    
    @Query("SELECT obj FROM Manutencao obj WHERE obj.status != 4")
    List<Manutencao> findAllExceptConcluidas();

    @Query("SELECT obj FROM Manutencao obj WHERE obj.status = 4")
    List<Manutencao> findAllConcluidas();
}
