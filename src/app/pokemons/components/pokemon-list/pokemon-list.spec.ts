import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PokemonList} from './pokemon-list';
import {SimplePokemon} from '../../interfaces/simple-pokemon.interface';
import {provideRouter} from '@angular/router';



const singlePokemones:SimplePokemon[] = [

  {
    id:"1",
    name:"bulbasaur"
  },
  {
    id:"2",
    name:"bulbasaur2"
  },
  {
    id:"2",
    name:"bulbasaur3"
  }

]


describe('Pokemon List', () => {

  let compiled:HTMLElement
  let fixture:ComponentFixture<PokemonList>
  let component: PokemonList


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PokemonList],
      providers: [provideRouter([])]
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonList)
    compiled = fixture.nativeElement as HTMLElement
    component = fixture.componentInstance


  })

  it('should create the app ', () => {

    expect(component).toBeTruthy()

  });

  it('should render the pokemon list', () => {

    fixture.componentRef.setInput("pokemons",singlePokemones)
    fixture.detectChanges()

    const pokemones = compiled.querySelectorAll("app-pokemon-card").length

    expect(pokemones).toBe(singlePokemones.length)


  });

  it('shouldnt render the pokemon list', () => {

    fixture.componentRef.setInput("pokemons",[])
    fixture.detectChanges()

    const pokemones = compiled.querySelectorAll("app-pokemon-card").length

    expect(pokemones).toBe(0)


  });


})
