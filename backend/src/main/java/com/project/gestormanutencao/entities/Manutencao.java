package com.project.gestormanutencao.entities;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.project.gestormanutencao.dto.ManutencaoDTO;
import com.project.gestormanutencao.enums.Prioridade;
import com.project.gestormanutencao.enums.Status;

@Entity
@Table(name = "tb_manutencao")
public class Manutencao implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descricao;
    private int km_manutencao;

    private Instant data_criacao;
    private Instant data_finalizacao;
    private Instant data_previsao;

    @ManyToOne
    @JoinColumn(name = "veiculo_id")
    private Veiculo veiculo;

    private String condicao_pagamento;
    private Long valor_pecas;
    private Long valor_servico;

    private Status status;
    private Prioridade prioridade;

    public Manutencao(){
    }

    public Manutencao(Long id, String descricao, int km_manutencao, Instant data_criacao, Instant data_finalizacao,
            Instant data_previsao, Veiculo veiculo, String condicao_pagamento, Long valor_pecas, Long valor_servico,
            Status status, Prioridade prioridade) {
        this.id = id;
        this.descricao = descricao;
        this.km_manutencao = km_manutencao;
        this.data_criacao = data_criacao;
        this.data_finalizacao = data_finalizacao;
        this.data_previsao = data_previsao;
        this.veiculo = veiculo;
        this.condicao_pagamento = condicao_pagamento;
        this.valor_pecas = valor_pecas;
        this.valor_servico = valor_servico;
        this.status = status;
        this.prioridade = prioridade;
    }

    public Manutencao(ManutencaoDTO dto){
        this.id = dto.getId();
        this.descricao = dto.getDescricao();
        this.km_manutencao = dto.getKm_manutencao();
        this.data_criacao = dto.getData_criacao();
        this.data_finalizacao = dto.getData_finalizacao();
        this.data_previsao = dto.getData_previsao();
        this.veiculo = new Veiculo(dto.getVeiculo());
        this.condicao_pagamento = dto.getCondicao_pagamento();
        this.valor_pecas = dto.getValor_pecas();
        this.valor_servico = dto.getValor_servico();
        this.status = dto.getStatus();
        this.prioridade = dto.getPrioridade();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getKm_manutencao() {
        return km_manutencao;
    }

    public void setKm_manutencao(int km_manutencao) {
        this.km_manutencao = km_manutencao;
    }

    public Instant getData_criacao() {
        return data_criacao;
    }

    public void setData_criacao(Instant data_criacao) {
        this.data_criacao = data_criacao;
    }

    public Instant getData_finalizacao() {
        return data_finalizacao;
    }

    public void setData_finalizacao(Instant data_finalizacao) {
        this.data_finalizacao = data_finalizacao;
    }

    public Instant getData_previsao() {
        return data_previsao;
    }

    public void setData_previsao(Instant data_previsao) {
        this.data_previsao = data_previsao;
    }

    public Veiculo getVeiculo() {
        return veiculo;
    }

    public void setVeiculo(Veiculo veiculo) {
        this.veiculo = veiculo;
    }

    public String getCondicao_pagamento() {
        return condicao_pagamento;
    }

    public void setCondicao_pagamento(String condicao_pagamento) {
        this.condicao_pagamento = condicao_pagamento;
    }

    public Long getValor_pecas() {
        return valor_pecas;
    }

    public void setValor_pecas(Long valor_pecas) {
        this.valor_pecas = valor_pecas;
    }

    public Long getValor_servico() {
        return valor_servico;
    }

    public void setValor_servico(Long valor_servico) {
        this.valor_servico = valor_servico;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Prioridade getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(Prioridade prioridade) {
        this.prioridade = prioridade;
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
        Manutencao other = (Manutencao) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
}
