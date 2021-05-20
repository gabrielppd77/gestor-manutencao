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
    fabricacao: 0,
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

  irParaManutencao(id: string): void{
    this.router.navigate([`manutencoes/concluidas/details/${id}`]);
  }

  contarManutencoes(): number{
    return this.manutencoes.length;
  }

  update(): void {
    this.service.update(this.veiculo).subscribe((response) => {
      this.router.navigate(['veiculos'])
      this.service.mensagem('Veículo atualizado com sucesso!')
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    })
  }

  delete(): void {
    this.service.delete(this.veiculo.id.toString()!).subscribe(response => {
      this.router.navigate(['veiculos'])
      this.service.mensagem('Veículo deletado com sucesso!')
    }, err => {
      this.service.mensagem('Veículo possuí associações com uma ou mais manutenções ' + err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate([`veiculos`]);
  }
}
