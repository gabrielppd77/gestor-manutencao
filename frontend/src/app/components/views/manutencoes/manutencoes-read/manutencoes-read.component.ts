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
    fabricacao: 0,
    ano: 0,
    chassi: '',
    tipo: ''
  };

  listStatus: String[] = ['ANALISE', 'AFAZER', 'FAZENDO', 'AGUARDANDO'];

  listPrioridade: String[] = ['VERMELHO', 'LARANJA', 'AMARELO', 'AZULCLARO', 'VERDECLARO'];

  datePrevisao = new Date();
  dateInicio = new Date();
  dataAtualizada: string;
  complementoData: string = "T10:00:00Z";

  veiculos: Veiculo[] = [];

  constructor(private service: ManutencaoService, private route: ActivatedRoute, private serviceVeiculo: VeiculoService , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
    this.findAllVeiculos();
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

  update(): void{
    if(this.dataAtualizada!= null){
      this.manutencao.data_previsao = this.dataAtualizada + this.complementoData;
    }else {
      this.manutencao.data_previsao = this.brokenDate(this.datePrevisao) + this.complementoData;
    }
    this.service.update(this.manutencao).subscribe(response => {
      this.router.navigate(['manutencoes']);
      this.service.mensagem('Manutenção atualizada com sucesso');
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    })
  }

  delete(): void {
    this.service.delete(this.manutencao.id).subscribe(response => {
      this.router.navigate([`manutencoes`])
      this.service.mensagem('Manutenção deletada com sucesso.');
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  conclude(): void {
    if(this.dataAtualizada!= null){
      this.manutencao.data_previsao = this.dataAtualizada + this.complementoData;
    }else {
      this.manutencao.data_previsao = this.brokenDate(this.datePrevisao) + this.complementoData;
    }
    this.service.conclude(this.manutencao).subscribe(response => {
      this.router.navigate(['manutencoes']);
      this.service.mensagem('Manutenção concluída com sucesso');
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
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

  brokenDate(date: Date): string {
      let dataFormatada = (this.addZero(date.getFullYear()) + "-" + this.addZero((date.getMonth() + 1)) + "-" + this.addZero(date.getDate()));
      return dataFormatada;
  }
}
