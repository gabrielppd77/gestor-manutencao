import { Manutencao } from '../../manutencao.model';
import { ManutencaoService } from '../../manutencao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencoes-conclude-read-all',
  templateUrl: './manutencoes-conclude-read-all.component.html',
  styleUrls: ['./manutencoes-conclude-read-all.component.css']
})
export class ManutencoesConcludeReadAllComponent implements OnInit {

  manutencoes: Manutencao [] = [];
  
  constructor(private service: ManutencaoService) { }

  ngOnInit(): void {
    this.findAllConclude()
  }

  findAllConclude() {
    this.service.findAllConcludes().subscribe(response => {
      this.manutencoes = response;
    })
  }
}
