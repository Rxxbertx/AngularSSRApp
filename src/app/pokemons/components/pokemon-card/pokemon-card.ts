import {Component, computed, input, Input, signal} from '@angular/core';
import {SimplePokemon} from '../../interfaces/simple-pokemon.interface';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  imports: [
    RouterLink
  ],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {

  public pokemon = input.required<SimplePokemon>()

  public pokemonImage = computed(()=>{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`
  })

}
