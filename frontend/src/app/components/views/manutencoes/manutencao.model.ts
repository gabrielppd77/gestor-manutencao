import { Veiculo } from '../veiculos/veiculo.model';

export interface Manutencao {
    id?: String;
    descricao: String;
    km_manutencao: String;

    data_criacao: String;
    data_finalizacao: String;
    data_previsao: String;

    veiculo: Veiculo;

    condicao_pagamento: String;
    valor_pecas: String;
    valor_servico: String;
    
    prioridade: String;
    status: String;
} 