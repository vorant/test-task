import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routeConfig} from './router.config';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
/*
  it('should have "Please Change Me :)" in h1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Please Change Me :)');
  }));
  */
});
