import { Prioridade } from '../../enums/manutencoes-enums/prioridade.enum';
import { Status } from '../../enums/manutencoes-enums/status.enum';
import { Veiculo } from '../veiculos/veiculo.model';

export interface Manutencao {
    id?: String;
    descricao: String;
    kmManutencao: String;

    dataCriacao: String;
    dataFinalizacao: String;
    dataPrevisao: String;

    veiculo: Veiculo;

    condicaoPagamento: String;
    valorPecas: String;
    valorServico: String;
    
    prioridade: Prioridade;
    status: Status;
} 