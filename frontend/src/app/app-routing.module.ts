import { VeiculosReadAllComponent } from './components/views/veiculos/veiculos-read-all/veiculos-read-all.component';
import { ManutencoesReadAllComponent } from './components/views/manutencoes/manutencoes-read-all/manutencoes-read-all.component';
import { ManutencoesReadComponent } from './components/views/manutencoes/manutencoes-read/manutencoes-read.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManutencoesConcludeReadAllComponent } from './components/views/manutencoes/manutencoes-conclude-read-all/manutencoes-conclude-read-all.component';

const routes: Routes = [
  {
    path: '',
    component: ManutencoesReadAllComponent
  },
  {
    path: 'manutencoes',
    component: ManutencoesReadAllComponent
  },
  {
    path: 'details/:id',
    component: ManutencoesReadComponent
  },
  {
    path: 'manutencoes/details/:id',
    component: ManutencoesReadComponent
  },
  {
    path: 'manutencoes/concluidas',
    component: ManutencoesConcludeReadAllComponent
  },
  {
    path: 'veiculos',
    component: VeiculosReadAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
