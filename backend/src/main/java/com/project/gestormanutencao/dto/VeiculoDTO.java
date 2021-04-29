package com.project.gestormanutencao.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.project.gestormanutencao.entities.Veiculo;
import com.project.gestormanutencao.enums.Tipo;

public class VeiculoDTO implements Serializable {
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    private Long id;
    private String placa;
    private int km;
    private String modelo;
    private int fabricacao;
    private int ano;
    private String chassi;
    private List<ManutencaoDTO> manutencoes = new ArrayList<>();
    private Tipo tipo;

    public VeiculoDTO (){
    }

    public VeiculoDTO(Long id, String placa, int km, String modelo, int fabricacao, int ano, String chassi, Tipo tipo) {
        this.id = id;
        this.placa = placa;
        this.km = km;
        this.modelo = modelo;
        this.fabricacao = fabricacao;
        this.ano = ano;
        this.chassi = chassi;
        this.tipo = tipo;
    }
    
    public VeiculoDTO(Veiculo veiculo) {
        id = veiculo.getId();
        placa = veiculo.getPlaca();
        km = veiculo.getKm();
        modelo = veiculo.getModelo();
        fabricacao = veiculo.getFabricacao();
        ano = veiculo.getAno();
        chassi = veiculo.getChassi();
        tipo = veiculo.getTipo();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public int getKm() {
        return km;
    }

    public void setKm(int km) {
        this.km = km;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getFabricacao() {
        return fabricacao;
    }

    public void setFabricacao(int fabricacao) {
        this.fabricacao = fabricacao;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getChassi() {
        return chassi;
    }

    public void setChassi(String chassi) {
        this.chassi = chassi;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    public List<ManutencaoDTO> getManutencoes() {
        return manutencoes;
    }

    public void setManutencoes(List<ManutencaoDTO> manutencoes) {
        this.manutencoes = manutencoes;
    }
}
