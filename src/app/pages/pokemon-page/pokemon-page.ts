import {Component, inject, OnInit, signal} from '@angular/core';
import {PokemonInterface} from '../../pokemons/interfaces/PokemonInterface';
import {Pokemons} from '../../pokemons/services/pokemons';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-page.html',
  styleUrl: './pokemon-page.css'
})
export class PokemonPage implements OnInit {

  public pokemon = signal<PokemonInterface | null>(null)
  private route = inject(ActivatedRoute)
  public pokemonService = inject(Pokemons)
  private title = inject(Title)
  private meta = inject(Meta)

  ngOnInit(): void {

    const pokemonId = this.route.snapshot.paramMap.get('id') ?? ''

    this.pokemonService.loadPokemon(pokemonId)
      .pipe(
        tap(pokemon => {
          this.title.setTitle(pokemon.name)
          this.meta.updateTag({name: 'description', content: `Details about ${pokemon.name}`})
          this.meta.updateTag({name: 'keywords', content: `pokemon, ${pokemon.name}, details`})
          this.meta.updateTag({name: 'og:title', content: pokemon.name})
          this.meta.updateTag({name: 'og:description', content: `Details about ${pokemon.name}`})
          this.meta.updateTag({name: 'og:image', content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`})
        })
      )

      .subscribe(pokemon => {
      this.pokemon.set(pokemon)
    })


  }


}
