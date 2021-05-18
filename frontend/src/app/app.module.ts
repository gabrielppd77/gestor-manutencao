import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { ManutencoesReadAllComponent } from './components/views/manutencoes/manutencoes-read-all/manutencoes-read-all.component';
import { ManutencoesConcludeReadAllComponent } from './components/views/manutencoes/manutencoes-conclude-read-all/manutencoes-conclude-read-all.component';
import { ManutencoesReadComponent } from './components/views/manutencoes/manutencoes-read/manutencoes-read.component';

import { VeiculosReadAllComponent } from './components/views/veiculos/veiculos-read-all/veiculos-read-all.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import  { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ManutencoesReadConcludeComponent } from './components/views/manutencoes/manutencoes-read-conclude/manutencoes-read-conclude.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ManutencoesReadComponent,
    ManutencoesReadAllComponent,
    ManutencoesConcludeReadAllComponent,
    VeiculosReadAllComponent,
    ManutencoesReadConcludeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
