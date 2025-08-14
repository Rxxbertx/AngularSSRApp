import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListSkeleton } from './pokemons-list-skeleton';

describe('PokemonsListSkeleton', () => {
  let component: PokemonsListSkeleton;
  let fixture: ComponentFixture<PokemonsListSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonsListSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsListSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
