import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos-create',
  templateUrl: './veiculos-create.component.html',
  styleUrls: ['./veiculos-create.component.css']
})
export class VeiculosCreateComponent implements OnInit {

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

  cancel(): void {
    this.router.navigate([`veiculos`]);
  }
}
