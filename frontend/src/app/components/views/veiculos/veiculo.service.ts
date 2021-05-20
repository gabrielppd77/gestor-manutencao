import { Observable } from 'rxjs';
import { Veiculo } from './veiculo.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Veiculo[]> {
    const url = `${this.baseUrl}/veiculos`;
    return this.http.get<Veiculo[]>(url);
  }

  findById(id: String): Observable<Veiculo> {
    const url = `${this.baseUrl}/veiculos/details/${id}`;
    return this.http.get<Veiculo>(url);
  }

  create(veiculo: Veiculo): Observable<Veiculo>{
    const url = `${this.baseUrl}/veiculos/insert`;
    return this.http.post<Veiculo>(url, veiculo);
  }

  update(veiculo: Veiculo): Observable<void>{
    const url = `${this.baseUrl}/veiculos/update/${veiculo.id}`;
    return this.http.put<void>(url, veiculo);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/veiculos/delete/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
