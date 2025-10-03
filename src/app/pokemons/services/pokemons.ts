import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, Observable, of, throwError} from 'rxjs';
import {SimplePokemon} from '../interfaces/simple-pokemon.interface';
import {PokemonAPIResponse} from '../interfaces/PokemonApiResponse';
import {PokemonInterface} from '../interfaces/PokemonInterface';

@Injectable({
  providedIn: 'root'
})
export class Pokemons {

  private httpClient = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  public loadPage(page: number, pageSize: number = 20): Observable<SimplePokemon[]> {
    let offset = (page - 1) * pageSize;
    console.log(page)
    if (offset < 0) {
      offset = 0; // Ensure offset is not negative
    }

    return this.httpClient.get<PokemonAPIResponse>(`${this.apiUrl}?offset=${offset}&limit=${pageSize}`).pipe(map((resp) => {
      const simplePokemons: SimplePokemon[] = resp.results.map(pokemon => ({
        name: pokemon.name,
        id: pokemon.url.split('/').at(-2) ?? '' // Extracting the ID from the URL
      }))
      return simplePokemons;

    }))
  }

  public loadPokemon(id: string): Observable<PokemonInterface> {

    return this.httpClient.get<PokemonInterface>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    )

  }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 0) {

      console.log('An error ocurred', error.error)

    } else {
      console.log(`Backend returned code ${error.status}, body:`, error.error)
    }

    const errorMessage = error.error ?? 'An error ocurred';

    return throwError(() => new Error(errorMessage))

  }

}
