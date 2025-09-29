import {ComponentFixture, TestBed} from '@angular/core/testing';
import { App } from './app';
import {Component} from '@angular/core';
import {Navbar} from './shared/navbar/navbar';

describe('App', () => {

  let fixture: ComponentFixture<App>;
  let app: App;
  let compiled: HTMLDivElement

@Component({
  standalone: true,
  template: `

  `,
  selector: "app-navbar"
})
  class NavbarMock{

  }



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).overrideComponent(App,{
      add:{
        imports:[NavbarMock]
      },
      remove:{
        imports:[Navbar]
      }
    }).compileComponents();

    fixture = TestBed.createComponent(App)
    compiled = fixture.nativeElement as HTMLDivElement


  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the navbar and router-outlet', () => {
    expect(compiled.querySelector("app-navbar")).toBeTruthy()
    expect(compiled.querySelector("router-outlet")).toBeTruthy()
  });

});
