import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'about',
    loadComponent: () => import('./pages/about-page/about-page').then(m => m.AboutPage)
  },
  {
    path:'pokemons',
    loadComponent: () => import('./pages/pokemons-page/pokemons-page').then(m => m.PokemonsPage)
  },
  {
    path:'pokemons/:id',
    loadComponent: () => import('./pages/pokemon-page/pokemon-page')
  },
  {
    path:'contact',
    loadComponent: () => import('./pages/contact-page/contact-page').then(m => m.ContactPage)
  },
  {
    path:'pricing',
    loadComponent: () => import('./pages/pricing-page/pricing-page').then(m => m.PricingPage)
  },
  {
    path:'**',
    redirectTo:'about',
  }
];
