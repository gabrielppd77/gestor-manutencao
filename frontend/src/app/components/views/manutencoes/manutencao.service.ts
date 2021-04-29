import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Manutencao } from './manutencao.model';

@Injectable({
  providedIn: 'root'
})
export class ManutencaoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Manutencao[]> {
    const url = `${this.baseUrl}/manutencoes`
    return this.http.get<Manutencao[]>(url)
  }
}
