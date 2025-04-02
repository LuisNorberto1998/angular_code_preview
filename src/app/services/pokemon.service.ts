import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';  // URL de la API

  constructor(private http: HttpClient) { }

  // Método para obtener los Pokémon
  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
