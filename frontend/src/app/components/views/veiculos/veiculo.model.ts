import { Manutencao } from "../manutencoes/manutencao.model";

export interface Veiculo {
    id?: number;
    placa: string;
    km: number;

    modelo: string;
    fabricacao: number;
    ano: number;
    chassi: string;

    manutencoes?: Manutencao[];

    tipo: string;
}