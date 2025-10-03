import {Component, effect, inject, signal} from '@angular/core';
import {PokemonList} from '../../pokemons/components/pokemon-list/pokemon-list';
import {Pokemons} from '../../pokemons/services/pokemons';
import {SimplePokemon} from '../../pokemons/interfaces/simple-pokemon.interface';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map, tap} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {PokemonsListSkeleton} from './ui/pokemons-list-skeleton/pokemons-list-skeleton';

@Component({
  selector: 'app-pokemons-page',
  standalone: true,
  imports: [
    PokemonList,
    PokemonsListSkeleton,
    RouterLink
  ],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css'
})
export class PokemonsPage {

  private pokemonsService = inject(Pokemons)
  public pokemons = signal<SimplePokemon[]>([]);
  private route = inject(ActivatedRoute)
  private title = inject(Title)

  public currentPage = toSignal<number>(this.route.params.pipe(map(params => {
    const page = params['page'] ?? '1';
    if (isNaN(+page)) {
      return 1;
    }
    return Math.max(1, +page);
  })));

  public loadNewPageOnChangePage = effect(() => {
    this.loadPokemons(this.currentPage());
  })


  public loadPokemons(nextPage = 0): void {

    const pageToLoad = this.currentPage()!;
    this.pokemonsService.loadPage(pageToLoad).pipe(
      tap(() =>
        this.title.setTitle(`PokemonsSSR - Page ${pageToLoad}`)
      )
    ).subscribe(pokemons => {
      this.pokemons.set(pokemons)
    })
  }


}
