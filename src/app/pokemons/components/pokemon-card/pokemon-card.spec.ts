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


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCard],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCard);

    fixture.componentRef.setInput("pokemon",mockPokemon)

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should have the SimplePokemon signal inputValue', () => {
    
  });

  it('should render the pokemon name and image correctly', () => {
    
  });

  it('should have the proper ng-reflect-router-link', () => {
    
  });

});
