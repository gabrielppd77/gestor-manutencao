import { Manutencao } from './../../manutencoes/manutencao.model';
import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Veiculo } from '../veiculo.model';

@Component({
  selector: 'app-veiculos-read',
  templateUrl: './veiculos-read.component.html',
  styleUrls: ['./veiculos-read.component.css']
})
export class VeiculosReadComponent implements OnInit {

  id: String = '';

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

  tipos: string[] = [
    'CAVALO',
    'CARRETA',
    'TRUCK',
    'TOCO',
    'CAMINHONETE',
    'UTILITARIO'
  ];

  manutencoes: Manutencao[] = [];

  constructor(private service: VeiculoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void{
    this.service.findById(this.id!).subscribe(response => {
      this.veiculo = response;
      this.manutencoes = response.manutencoes;
    })
  }

  contarManutencoes(): number{
    return this.manutencoes.length;
  }

  cancel(): void {
    this.router.navigate([`veiculos`]);
  }
}
