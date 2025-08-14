import {Component, inject, OnInit, signal} from '@angular/core';
import {PokemonList} from '../../pokemons/components/pokemon-list/pokemon-list';
import {Pokemons} from '../../pokemons/services/pokemons';
import {SimplePokemon} from '../../pokemons/interfaces/simple-pokemon.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map, tap} from 'rxjs';
import {Title} from '@angular/platform-browser';
import {PokemonsListSkeleton} from './ui/pokemons-list-skeleton/pokemons-list-skeleton';

@Component({
  selector: 'app-pokemons-page',
  imports: [
    PokemonList,
    PokemonsListSkeleton
  ],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css'
})
export class PokemonsPage implements OnInit {

  private pokemonsService = inject(Pokemons)
  public pokemons = signal<SimplePokemon[]>([]);
  private params = inject(ActivatedRoute)
  private router = inject(Router)
  private title = inject(Title)

  public currentPage = toSignal<number>(this.params.queryParamMap.pipe(map(params => {
    const page = params.get('page') ?? '1';
    if (isNaN(+page)) {
      return 1;
    }
    return  Math.max(1,+page);
  })));

  ngOnInit():void {



    this.loadPokemons();

  }

  public loadPokemons(nextPage = 0):void {
    const pageToLoad = this.currentPage()! + nextPage;
    this.pokemonsService.loadPage(nextPage).pipe(
      tap(()=>

      this.router.navigate([],{queryParams: {page: pageToLoad}})

      ),
      tap(()=>
        this.title.setTitle(`PokemonsSSR - Page ${pageToLoad}`)
      )
    ).subscribe(pokemons => {
      this.pokemons.set(pokemons)
    })
  }


}

