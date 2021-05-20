import { VeiculoService } from './../../veiculos/veiculo.service';
import { Veiculo } from './../../veiculos/veiculo.model';
import { Manutencao } from './../manutencao.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManutencaoService } from '../manutencao.service';

@Component({
  selector: 'app-manutencoes-read',
  templateUrl: './manutencoes-read.component.html',
  styleUrls: ['./manutencoes-read.component.css']
})
export class ManutencoesReadComponent implements OnInit {

  id: String = '';

  manutencao: Manutencao = {
    id: 0,
    descricao: '',
    km_manutencao: 0,
    data_criacao: '',
    data_finalizacao: '',
    data_previsao: '',
    condicao_pagamento: '',
    valor_pecas: 0,
    valor_servico: 0,
    prioridade: '',
    status: ''
  };

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

  datePrevisao = new Date();
  dateInicio = new Date();

  veiculos: Veiculo[] = [];

  constructor(private service: ManutencaoService, private route: ActivatedRoute, private serviceVeiculo: VeiculoService , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
    this.findAllVeiculos();
  }

  cancel(): void {
    this.router.navigate([`manutencoes`]);
  }

  findById(): void{
    this.service.findById(this.id!).subscribe(response => {
      this.veiculo = response.veiculo;
      this.manutencao = response;
      this.datePrevisao = new Date(response.data_previsao);
      this.dateInicio = new Date(response.data_criacao);
    })
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
