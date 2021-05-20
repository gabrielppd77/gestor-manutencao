import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../../veiculos/veiculo.model';
import { VeiculoService } from '../../veiculos/veiculo.service';
import { ManutencaoService } from '../manutencao.service';

@Component({
  selector: 'app-manutencoes-create',
  templateUrl: './manutencoes-create.component.html',
  styleUrls: ['./manutencoes-create.component.css']
})
export class ManutencoesCreateComponent implements OnInit {

  veiculo: Veiculo= {
    id: 0,
    placa: '',
    km: 0,
    modelo: '',
    fabricacao: '',
    ano: 0,
    chassi: '',
    tipo: ''
  };

  listStatus: String[] = ['ANALISE', 'AFAZER', 'FAZENDO', 'AGUARDANDO'];

  listPrioridade: String[] = ['VERMELHO', 'LARANJA', 'AMARELO', 'AZULCLARO', 'VERDECLARO'];

  veiculos: Veiculo[] = [];

  constructor(private service: ManutencaoService, private serviceVeiculo: VeiculoService , private router: Router) { }

  ngOnInit(): void {
    this.findAllVeiculos();
  }


  findAllVeiculos(): void {
    this.serviceVeiculo.findAll().subscribe(response => {
      this.veiculos = response;
    })
  }

  changeColorPrioridade(prioridade: String): String{
    switch (prioridade) {
      case 'VERMELHO':
        return 'rgb(255, 71, 71)';
      case 'LARANJA':
        return 'orange';
      case 'AMARELO':
        return 'rgb(255, 251, 9)';
      case 'AZULCLARO':
        return 'rgb(103, 103, 255)';
      case 'VERDECLARO':
        return 'greenyellow';
      default:
        break;
    }
  }

  cancel(): void {
    this.router.navigate([`manutencoes`]);
  }
}
