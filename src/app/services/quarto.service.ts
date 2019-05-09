import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuartoService {
  api = "http://localhost:3000/quartos";
  constructor(private http: HttpClient) {}

  listaTodos() {
    return this.http.get(this.api);
  }
}
