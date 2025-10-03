import {TestBed} from '@angular/core/testing';
import {Pokemons} from './pokemons';
import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';
import {SimplePokemon} from '../interfaces/simple-pokemon.interface';
import {PokemonAPIResponse} from '../interfaces/PokemonApiResponse';
import {catchError} from 'rxjs';


const expectedPokemons: SimplePokemon[] = [

  {
    id: "1",
    name: "bulbasaur"
  },
  {
    id: "2",
    name: "ivysaur"
  },

]

const mockPokemon: SimplePokemon = {
  id: "1",
  name: "bulbasaur"
}

const mockPokeApiResponse: PokemonAPIResponse = {

  count: 1302,
  next: "",
  results: [
    {
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      name: "bulbasaur"
    },
    {
      url: "https://pokeapi.co/api/v2/pokemon/2/",
      name: "ivysaur"
    },
  ]


}

describe("pruebas servicios", () => {

  let service: Pokemons
  let httpMock: HttpTestingController;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents()

    service = TestBed.inject(Pokemons)
    httpMock = TestBed.inject(HttpTestingController)

  })

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  });


  it('should load a page of SimplePokemons', () => {

    service.loadPage(1).subscribe(pokemons => expect(pokemons).toEqual(expectedPokemons))

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')

    expect(req.request.method).toBe('GET')

    req.flush(mockPokeApiResponse)

  });

  it('should load page 5 of SimplePokemons', () => {

    service.loadPage(5).subscribe(pokemons => expect(pokemons).toEqual(expectedPokemons))

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon?offset=80&limit=20')

    expect(req.request.method).toBe('GET')

    req.flush(mockPokeApiResponse)

  });

  it('should load a pokemon by id', () => {

    service.loadPokemon("1").subscribe((poke: any) => expect(poke).toEqual(mockPokemon))

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/1')

    expect(req.request.method).toBe('GET')

    req.flush(mockPokemon)

  });

  it('should catch error if pokemon not found', () => {

    service.loadPokemon("yonoexisto").pipe(catchError(err => {

      expect(err.message).toContain('Pokemon not found')

      return []
    }))
      .subscribe((poke: any) => expect(poke).toEqual(mockPokemon))

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/yonoexisto')

    expect(req.request.method).toBe('GET')


    req.flush('Pokemon not found', {
      status: 404,
      statusText: 'Not Found'
    })


  });


})
