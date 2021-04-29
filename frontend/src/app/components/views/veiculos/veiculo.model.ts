import { Tipo } from "../../enums/veiculos-enums/tipo.enum";
import { Manutencao } from "../manutencoes/manutencao.model";

export interface Veiculo {
    id?: String;
    placa: String;
    km: String;

    modelo: String;
    fabricacao: String;
    ano: String;
    chassi: String;

    manutencoes: Manutencao[];

    tipo: Tipo;
}