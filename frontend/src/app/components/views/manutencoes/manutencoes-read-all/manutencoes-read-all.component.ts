import { Manutencao } from './../manutencao.model';
import { ManutencaoService } from '../manutencao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manutencoes-read-all',
  templateUrl: './manutencoes-read-all.component.html',
  styleUrls: ['./manutencoes-read-all.component.css']
})
export class ManutencoesReadAllComponent implements OnInit {

  manutencoesFazendo: Manutencao [] = []
  manutencoesAFazer: Manutencao [] = []
  manutencoesAnalise: Manutencao [] = []
  manutencoesAguardando: Manutencao [] = []

  manutencoes: Manutencao [] = []

  constructor(private service: ManutencaoService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.manutencoes = resposta;
      this.changeStatus();
    })
  }

  changeStatus(){
    this.manutencoes.forEach(element => {
      switch (element.status) {
        case 'FAZENDO':
          this.manutencoesFazendo.push(element)
          break;
        case 'AFAZER':
          this.manutencoesAFazer.push(element)
          break;
        case 'ANALISE':
          this.manutencoesAnalise.push(element)
          break;
        case 'AGUARDANDO':
          this.manutencoesAguardando.push(element)
          break;
        default:
          break;
      }
    });
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
}
