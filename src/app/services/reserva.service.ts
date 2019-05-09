import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  api = "http://localhost:3000/reservas";

  constructor(private http: HttpClient) { }

  create(reserva: any) {
    return this.http.post(this.api, reserva);
  }
}
