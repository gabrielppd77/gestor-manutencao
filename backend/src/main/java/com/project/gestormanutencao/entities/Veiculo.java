package com.project.gestormanutencao.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.project.gestormanutencao.dto.VeiculoDTO;
import com.project.gestormanutencao.enums.Tipo;

@Entity
@Table(name = "tb_veiculo")
public class Veiculo implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String placa;
    private int km;

    private String modelo;
    private int fabricacao;
    private int ano;
    private String chassi;

    @OneToMany(mappedBy = "veiculo")
    private List<Manutencao> manutencoes = new ArrayList<>();

    private Tipo tipo;

    public Veiculo (){
    }

    public Veiculo(Long id, String placa, int km, String modelo, int fabricacao, int ano, String chassi, Tipo tipo) {
        this.id = id;
        this.placa = placa;
        this.km = km;
        this.modelo = modelo;
        this.fabricacao = fabricacao;
        this.ano = ano;
        this.chassi = chassi;
        this.tipo = tipo;
    }

    public Veiculo (VeiculoDTO dto){
        this.id = dto.getId();
        this.placa = dto.getPlaca();
        this.km = dto.getKm();
        this.modelo = dto.getModelo();
        this.fabricacao = dto.getFabricacao();
        this.ano = dto.getAno();
        this.chassi = dto.getChassi();
        this.manutencoes = dto.getManutencoes().stream().map(x -> new Manutencao(x)).collect(Collectors.toList());
        this.tipo = dto.getTipo();
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

    public List<Manutencao> getManutencoes() {
        return manutencoes;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Veiculo other = (Veiculo) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
}
