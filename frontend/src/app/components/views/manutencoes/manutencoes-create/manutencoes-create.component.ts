import { Veiculo } from './../../veiculos/veiculo.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from '../../veiculos/veiculo.service';
import { Manutencao } from '../manutencao.model';
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
    fabricacao: 0,
    ano: 0,
    chassi: '',
    tipo: ''
  };

  manutencao: Manutencao = {
    descricao: '',
    data_previsao: '',
    veiculo: this.veiculo,
    condicao_pagamento: '',
    valor_pecas: 0,
    valor_servico: 0,
    prioridade: '',
    status: ''
  };

  listStatus: String[] = ['ANALISE', 'AFAZER', 'FAZENDO', 'AGUARDANDO'];

  listPrioridade: String[] = ['VERMELHO', 'LARANJA', 'AMARELO', 'AZULCLARO', 'VERDECLARO'];

  prioridadeSelect: String = '';

  complementoData: string = "T10:00:00Z";

  dataInicial: Date = new Date();

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

  create(): void {
    this.manutencao.data_previsao = this.manutencao.data_previsao + this.complementoData;
    this.service.create(this.manutencao).subscribe((response) => {
      this.router.navigate(['manutencoes']);
      this.service.mensagem('Manutenção criada com Sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate([`manutencoes`]);
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

  addZero(number: Number){
    if(number <= 9){
        return "0" + number;
    } else {
        return number
    }
  }
  
  brokenDate(date: Date): String {
      let dataFormatada = (this.addZero(date.getFullYear()) + "-" + this.addZero((date.getMonth() + 1)) + "-" + this.addZero(date.getDate()));
      return dataFormatada;
  }
}
