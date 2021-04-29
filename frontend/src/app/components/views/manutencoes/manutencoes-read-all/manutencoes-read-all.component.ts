import { Manutencao } from './../manutencao.model';
import { ManutencaoService } from '../manutencao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manutencoes-read-all',
  templateUrl: './manutencoes-read-all.component.html',
  styleUrls: ['./manutencoes-read-all.component.css']
})
export class ManutencoesReadAllComponent implements OnInit {

  manutencoes: Manutencao [] = []

  constructor(private service: ManutencaoService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.manutencoes = resposta;
      console.log(this.manutencoes);
    })
  }
}
