import { VeiculosCreateComponent } from './components/views/veiculos/veiculos-create/veiculos-create.component';
import { VeiculosReadAllComponent } from './components/views/veiculos/veiculos-read-all/veiculos-read-all.component';
import { ManutencoesReadAllComponent } from './components/views/manutencoes/manutencoes-read-all/manutencoes-read-all.component';
import { ManutencoesReadComponent } from './components/views/manutencoes/manutencoes-read/manutencoes-read.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManutencoesConcludeReadAllComponent } from './components/views/manutencoes/manuntecoes-conclude/manutencoes-conclude-read-all/manutencoes-conclude-read-all.component';
import { ManutencoesReadConcludeComponent } from './components/views/manutencoes/manuntecoes-conclude/manutencoes-read-conclude/manutencoes-read-conclude.component';
import { VeiculosReadComponent } from './components/views/veiculos/veiculos-read/veiculos-read.component';
import { ManutencoesCreateComponent } from './components/views/manutencoes/manutencoes-create/manutencoes-create.component';

const routes: Routes = [
  {
    path: '',
    component: ManutencoesReadAllComponent
  },
  {
    path: 'details/:id',
    component: ManutencoesReadComponent
  },
  {
    path: 'insert',
    component: ManutencoesCreateComponent
  },
  {
    path: 'manutencoes',
    component: ManutencoesReadAllComponent
  },
  {
    path: 'manutencoes/details/:id',
    component: ManutencoesReadComponent
  },
  {
    path: 'manutencoes/insert',
    component: ManutencoesCreateComponent
  },



  {
    path: 'manutencoes/concluidas',
    component: ManutencoesConcludeReadAllComponent
  },
  {
    path: 'manutencoes/concluidas/details/:id',
    component: ManutencoesReadConcludeComponent
  },




  {
    path: 'veiculos',
    component: VeiculosReadAllComponent
  },
  {
    path: 'veiculos/details/:id',
    component: VeiculosReadComponent
  },
  {
    path: 'veiculos/insert',
    component: VeiculosCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
