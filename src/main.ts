import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideClientHydration(),
  ]
});
