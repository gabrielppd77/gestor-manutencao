import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Manutencao } from '../manutencao.model';
import { ManutencaoService } from '../manutencao.service';

@Component({
  selector: 'app-manutencoes-read',
  templateUrl: './manutencoes-read.component.html',
  styleUrls: ['./manutencoes-read.component.css']
})
export class ManutencoesReadComponent implements OnInit {

  id: String = '';

  manutencao: Manutencao;

  constructor(private service: ManutencaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  return(): void {
    this.router.navigate([`manutencoes`]);
  }

  findById(): void{
    this.service.findById(this.id!).subscribe(resposta => {
      this.manutencao = resposta
      console.log(this.manutencao)
    })
  }
}
