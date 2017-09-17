import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockProductsAPI} from './mocks/mock-products-api.service';
import {MockPetsAPI} from "./mocks/mock-pets-api.service";

export function HttpFactoryDev(backend: MockBackend, options: BaseRequestOptions) {
  return new Http(backend, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // Mock Backend
    MockProductsAPI,
    MockPetsAPI,
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: HttpFactoryDev
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
