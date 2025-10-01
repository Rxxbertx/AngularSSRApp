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



})
