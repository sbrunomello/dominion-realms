import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});

import { addIcons } from 'ionicons';
import { constructOutline, nutritionOutline, hammerOutline, earthOutline } from 'ionicons/icons';

addIcons({
  'construct-outline': constructOutline,
  'nutrition-outline': nutritionOutline,
  'hammer-outline': hammerOutline,
  'earth-outline': earthOutline,
});
