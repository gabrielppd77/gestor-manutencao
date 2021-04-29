import { Manutencao } from '../manutencao.model';
import { Component, OnInit } from '@angular/core';
import { ManutencaoService } from '../manutencao.service';

@Component({
  selector: 'app-manutencoes-read',
  templateUrl: './manutencoes-read.component.html',
  styleUrls: ['./manutencoes-read.component.css']
})
export class ManutencoesReadComponent implements OnInit {

  manutencoes: Manutencao[] = []

  displayedColumns: string[] = ['placa', 'descricao', 'data_previsao'];

  constructor(private service: ManutencaoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.manutencoes = resposta;
    })
  }

  
}
