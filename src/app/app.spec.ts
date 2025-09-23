import {ComponentFixture, TestBed} from '@angular/core/testing';
import { App } from './app';

describe('App', () => {

  let fixture: ComponentFixture<App>;
  let app: App;
  let compiled: HTMLDivElement



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
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
