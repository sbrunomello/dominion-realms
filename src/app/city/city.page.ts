import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
  standalone: true,
  imports: [CommonModule], // Certifique-se que isso está incluso
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CityPage implements OnInit {
  buildings: any[] = [];
  cityId: string | null = null;

  constructor(private mapService: MapService, private route: ActivatedRoute) {}

  async ngOnInit() {
    /*this.mapService.getMockBuildings().then((buildings) => {
      this.buildings = buildings;
    });*/
  }
}
