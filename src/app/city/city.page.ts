import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CityPage implements OnInit {
  city = {
    population: 1200,
    dailyProduction: '100 Madeira, 50 Pedra, 20 Ferro',
    defense: 300,
    combatPoints: 500,
  };

  currentUpgrades = [
    { name: 'Fazenda', timeLeft: '3h', progress: 50 },
    { name: 'Lanceiro', timeLeft: '1h', progress: 75 },
  ];

  constructions = [
    { name: 'Fazenda', level: 3, cost: '150 Madeira, 150 Madeira, 150 Madeira' },
    { name: 'Serraria', level: 2, cost: '250 Madeira, 150 Madeira, 150 Madeira, 150 Madeira' },
    { name: 'Pedreira', level: 2, cost: '350 Madeira, 150 Madeira, 150 Madeira, 150 Madeira' },
    { name: 'Mina', level: 1, cost: '450 Madeir, 150 Madeira, 150 Madeira, 150 Madeira' },
  ];

  militaryUnits = [
    {
      name: 'Lanceiro',
      level: 3,
      trainCost: 30,
      maxTrainable: 200, 
      quantityToTrain: 0,
    },
    {
      name: 'Arqueiro',
      level: 2,
      trainCost: 20,
      maxTrainable: 150,
      quantityToTrain: 0,
    },
    {
      name: 'Cavaleiro',
      level: 1,
      trainCost: 50,
      maxTrainable: 100,
      quantityToTrain: 0,
    },
  ];

  constructor() {}

  ngOnInit() {}

  expandedBadge: string | null = null;

  toggleBadge(name: string) {
    this.expandedBadge = this.expandedBadge === name ? null : name;
  }

  upgradeBuilding(building: any) {
    console.log(`Upgrade para ${building.name}`);
  }

  trainUnit(unit: any) {
    alert(
      `Treinando ${unit.quantityToTrain} ${unit.name}(s) por ${this.calculateTotalCost(
        unit
      )} recursos.`
    );
    
    unit.quantityToTrain = 0;
  }

  calculateTotalCost(unit: any): number {
    return unit.trainCost * unit.quantityToTrain;
  }

  upgradeUnit(unit: any) {
    console.log(`Upgrade para ${unit.name}`);
  }

  expandBadge(item: any) {
    console.log(`Expandindo badge para ${item.name}`);
    
  }
}

