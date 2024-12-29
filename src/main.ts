import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { addIcons } from 'ionicons';
import { constructOutline, nutritionOutline, hammerOutline, earthOutline, homeOutline, cashOutline, peopleOutline, mapOutline, statsChartOutline, bagOutline, informationCircleOutline } from 'ionicons/icons';


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});


addIcons({
  'construct-outline': constructOutline,
  'nutrition-outline': nutritionOutline,
  'hammer-outline': hammerOutline,
  'earth-outline': earthOutline,
  'home-outline' : homeOutline,
  'cash-outline': cashOutline,
  'people-outline' : peopleOutline,
  'map-outline': mapOutline,
  'stats-chart-outline' : statsChartOutline,
  'bag-outline' : bagOutline,
  'information-circle-outline': informationCircleOutline,
});
