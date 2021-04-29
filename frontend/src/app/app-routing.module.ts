import { ManutencoesReadComponent } from './components/views/manutencoes/manutencoes-read/manutencoes-read.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ManutencoesReadComponent
  },
  {
    path: 'manutencoes',
    component: ManutencoesReadComponent
  },
  {
    path: 'manutencoes/concluidas',
    component: ManutencoesReadComponent
  },
  {
    path: 'veiculos',
    component: ManutencoesReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
