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

  selectedVeiculo: Veiculo= {
    id: 0,
    placa: '',
    km: 0,
    modelo: '',
    fabricacao: '',
    ano: 0,
    chassi: '',
    tipo: ''
  };

  veiculos: Veiculo[] = [];

  constructor(private service: ManutencaoService, private route: ActivatedRoute, private serviceVeiculo: VeiculoService /*, private router: Router*/) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
    this.findAllVeiculos();
  }

  // return(): void {
  //   this.router.navigate([`manutencoes`]);
  // }

  findById(): void{
    this.service.findById(this.id!).subscribe(response => {
      this.selectedVeiculo = response.veiculo;
      this.manutencao = response;
    })
  }

  findAllVeiculos(): void {
    this.serviceVeiculo.findAll().subscribe(response => {
      this.veiculos = response;
    })
  }

}
