import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {SimplePokemon} from '../interfaces/simple-pokemon.interface';
import {PokemonAPIResponse} from '../interfaces/PokemonApiResponse';

@Injectable({
  providedIn: 'root'
})
export class Pokemons {

  private httpClient = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  public loadPage(page: number, pageSize: number = 20): Observable<SimplePokemon[]> {
    let offset = (page - 1) * pageSize;

    if (offset < 0) {
      offset = 0
    }
    return this.httpClient.get<PokemonAPIResponse>(`${this.apiUrl}?offset=${offset}&limit=${pageSize}`).pipe(map((resp) => {
      const simplePokemons: SimplePokemon[] = resp.results.map(pokemon => ({
        name: pokemon.name,
        id: pokemon.url.split('/').at(-2)?? '' // Extracting the ID from the URL
      }))
      return simplePokemons;

    }))
  }
}
