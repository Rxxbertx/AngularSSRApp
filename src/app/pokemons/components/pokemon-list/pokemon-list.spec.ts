import {TestBed} from '@angular/core/testing';
import {PokemonList} from './pokemon-list';

describe('Pokemon List', () => {

  let compiled
  let fixture
  let component


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [PokemonList],
    }).compileComponents()

    fixture = TestBed.createComponent(PokemonList)
    compiled = fixture.nativeElement as HTMLElement
    component = fixture.componentInstance


  })

  it('should ', () => {

  });


})
