import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-region-map',
  templateUrl: './region-map.page.html',
  styleUrls: ['./region-map.page.scss'],
  standalone: true,
  imports: [CommonModule], // Adicione os módulos aqui
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class RegionMapPage implements OnInit {
  cities: any[] = [];
  selectedCity: any = null;
  regionId: string | null = null;

  constructor(private mapService: MapService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    /*this.mapService.getMockCities().then((cities) => {
      this.cities = cities;
    });*/
  }

  onCitySelected(city: any) {
    this.selectedCity = city;
  }

  enterCity() {
    this.router.navigate(['/tabs/city'], { queryParams: { cityId: this.selectedCity.id } });
  }
}
