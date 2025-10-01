import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCard } from './pokemon-card';
import {provideRouter} from '@angular/router';
import {SimplePokemon} from '../../interfaces/simple-pokemon.interface';

const mockPokemon:SimplePokemon = {
  id:"1",
  name:"bulbasaur"
}

describe('PokemonCard', () => {
  let component: PokemonCard;
  let fixture: ComponentFixture<PokemonCard>;
  let compiled: HTMLDivElement



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCard],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCard);

    fixture.componentRef.setInput("pokemon",mockPokemon)

    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLDivElement

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should have the SimplePokemon signal inputValue', () => {

    expect(component.pokemon()).toEqual(mockPokemon)

  });

  it('should render the pokemon name and image correctly', () => {

    const pokeImg = compiled.querySelector("img") as HTMLImageElement
    const pokeName = compiled.querySelector("h2") as HTMLHeadingElement

    expect(pokeImg).toBeDefined()
    expect(pokeName.textContent?.trim()).toEqual(mockPokemon.name.trim())

  });

  it('should have the proper ng-reflect-router-link', () => {

    console.log(compiled.querySelector("div"))

    expect(compiled.attributes.getNamedItem("ng-reflect-router-link")?.value).toBe(`/pokemons/${mockPokemon.name}`)

  });

});
