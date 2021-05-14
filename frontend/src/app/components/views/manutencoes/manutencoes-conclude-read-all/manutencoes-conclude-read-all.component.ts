import { Manutencao } from './../manutencao.model';
import { ManutencaoService } from './../manutencao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manutencoes-conclude-read-all',
  templateUrl: './manutencoes-conclude-read-all.component.html',
  styleUrls: ['./manutencoes-conclude-read-all.component.css']
})
export class ManutencoesConcludeReadAllComponent implements OnInit {

  displayedColumns: string[] = ['placa', 'descricao', 'km_manutencao', 'data_finalizacao'];

  manutencoes: Manutencao [] = [];

  constructor(private service: ManutencaoService) { }

  ngOnInit(): void {
    this.findAllConclude()
  }

  findAllConclude() {
    this.service.findAllConcludes().subscribe(response => {
      this.manutencoes = response;
      console.log(this.manutencoes);
    })
  }
}
