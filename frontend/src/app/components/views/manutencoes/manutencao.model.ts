import { Veiculo } from '../veiculos/veiculo.model';

export interface Manutencao {
    id?: number;
    descricao: string;
    km_manutencao: number;

    data_criacao: string;
    data_finalizacao: string;
    data_previsao: string;

    veiculo?: Veiculo;

    condicao_pagamento: string;
    valor_pecas: number;
    valor_servico: number;
    
    prioridade: string;
    status: string;
} 