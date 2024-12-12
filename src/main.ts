import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),     // Routen bereitstellen
    provideHttpClient(),       // HTTP-Client bereitstellen
    provideAnimations(),       // Animationsmodule bereitstellen (für Angular Material)
  ],
}).catch((err) => console.error(err));