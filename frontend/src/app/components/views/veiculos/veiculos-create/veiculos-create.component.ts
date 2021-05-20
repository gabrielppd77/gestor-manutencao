import { Veiculo } from './../veiculo.model';
import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos-create',
  templateUrl: './veiculos-create.component.html',
  styleUrls: ['./veiculos-create.component.css']
})
export class VeiculosCreateComponent implements OnInit {

  veiculo: Veiculo= {
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

  constructor(private service: VeiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.veiculo).subscribe((response) => {
      this.router.navigate(['veiculos']);
      this.service.mensagem('Veículo criado com Sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate([`veiculos`]);
  }
}
