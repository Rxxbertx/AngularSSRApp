import {TestBed} from '@angular/core/testing';
import {provideRouter, Router} from '@angular/router';
import {routes} from './app.routes';
import {Location} from '@angular/common';

describe("App Routes", () => {

  let router: Router
  let location: Location

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    }).compileComponents()

    router = TestBed.inject(Router)
    location = TestBed.inject(Location)

  })


  it('should navigate to About redirects to /about', async () => {

    await router.navigate(['about'])

    expect(location.path()).toBe("/about")


  });

  it('should load the proper component', async () => {

    const aboutRoute = routes.find((route) => route.path === 'about')!
    expect(aboutRoute).toBeDefined()


    const aboutComponent = (await aboutRoute.loadComponent!()) as any;

    const name = aboutComponent.default.name.replace( /\d+$/, '' );

    console.log(name)


  });


})
