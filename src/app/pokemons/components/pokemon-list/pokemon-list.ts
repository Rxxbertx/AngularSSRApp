import {Component, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimplePokemon} from '../../interfaces/simple-pokemon.interface';
import {PokemonCard} from '../pokemon-card/pokemon-card';

@Component({
  selector: 'app-pokemon-list',
  imports: [
    CommonModule,
    PokemonCard
  ],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList {

  public pokemons = input.required<SimplePokemon[]>();

}
