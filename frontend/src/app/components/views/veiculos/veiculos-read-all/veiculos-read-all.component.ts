import { Veiculo } from './../veiculo.model';
import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-read-all',
  templateUrl: './veiculos-read-all.component.html',
  styleUrls: ['./veiculos-read-all.component.css']
})
export class VeiculosReadAllComponent implements OnInit {

  veiculos: Veiculo[] = [];

  constructor(private service: VeiculoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(response => {
      this.veiculos = response;
    })
  }

  contarManutencoes(veiculo: Veiculo): number{
    return veiculo.manutencoes.length;
  }
}
