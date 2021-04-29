package com.project.gestormanutencao.dto;

import java.io.Serializable;
import java.time.Instant;

import com.project.gestormanutencao.entities.Manutencao;
import com.project.gestormanutencao.enums.Prioridade;
import com.project.gestormanutencao.enums.Status;

public class ManutencaoDTO implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    
    private Long id;
    private String descricao;
    private int km_manutencao;

    private Instant data_criacao;
    private Instant data_finalizacao;
    private Instant data_previsao;

    private VeiculoDTO veiculo;

    private String condicao_pagamento;
    private Long valor_pecas;
    private Long valor_servico;

    private Status status;
    private Prioridade prioridade;

    public ManutencaoDTO () {
    }

    public ManutencaoDTO(Long id, String descricao, int km_manutencao, Instant data_criacao, Instant data_finalizacao,
            Instant data_previsao, VeiculoDTO veiculo, String condicao_pagamento, Long valor_pecas, Long valor_servico,
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

    public ManutencaoDTO(Manutencao manutencao) {
        id = manutencao.getId();
        descricao = manutencao.getDescricao();
        km_manutencao = manutencao.getKm_manutencao();
        data_criacao = manutencao.getData_criacao();
        data_finalizacao = manutencao.getData_finalizacao();
        data_previsao = manutencao.getData_previsao();
        veiculo = new VeiculoDTO(manutencao.getVeiculo());
        condicao_pagamento = manutencao.getCondicao_pagamento();
        valor_pecas = manutencao.getValor_pecas();
        valor_servico = manutencao.getValor_servico();
        status = manutencao.getStatus();
        prioridade = manutencao.getPrioridade();
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

    public VeiculoDTO getVeiculo() {
        return veiculo;
    }

    public void setVeiculo(VeiculoDTO veiculo) {
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
}
