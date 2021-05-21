import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Manutencao } from './manutencao.model';

@Injectable({
  providedIn: 'root'
})
export class ManutencaoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Manutencao[]> {
    const url = `${this.baseUrl}/manutencoes`;
    return this.http.get<Manutencao[]>(url);
  }

  findAllConcludes(): Observable<Manutencao[]> {
    const url = `${this.baseUrl}/manutencoes/concluidas`;
    return this.http.get<Manutencao[]>(url);
  }

  findById(id: String): Observable<Manutencao> {
    const url = `${this.baseUrl}/manutencoes/details/${id}`;
    return this.http.get<Manutencao>(url);
  }

  create(manutencao: Manutencao): Observable<Manutencao>{
    const url = `${this.baseUrl}/manutencoes/insert`;
    return this.http.post<Manutencao>(url, manutencao);
  }

  update(manutencao: Manutencao): Observable<void> {
    const url = `${this.baseUrl}/manutencoes/update/${manutencao.id}`
    return this.http.put<void>(url, manutencao);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
