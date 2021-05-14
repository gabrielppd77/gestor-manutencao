import { Observable } from 'rxjs';
import { Veiculo } from './veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Veiculo[]> {
    const url = `${this.baseUrl}/veiculos`;
    return this.http.get<Veiculo[]>(url);
  }
}
