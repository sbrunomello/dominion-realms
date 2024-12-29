import { Component } from '@angular/core';
import { mockCityDetails, mockRegions } from '../services/mock.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class GamePage {
  cityMap = mockCityDetails;
  selectedCell: any = null; // Célula selecionada
  globalMap = mockRegions;
  currentView = 'city';
  buildings = [
    { name: 'Farm', emoji: '🌾' },
    { name: 'Lumber Mill', emoji: '🪵' },
    { name: 'Quarry', emoji: '⛏️' },
    { name: 'Iron Mine', emoji: '⚒️' },
    { name: 'Gold Mine', emoji: '🏆' },
  ];

  resources = [
    { name: 'Food', emoji: '🍖', amount: 1000 },
    { name: 'Wood', emoji: '🌲', amount: 800 },
    { name: 'Stone', emoji: '🧱', amount: 750 },
    { name: 'Iron', emoji: '⚒️', amount: 500 },
    { name: 'Gold', emoji: '💰', amount: 300 },
  ];

  sidePanelTitle = 'Detalhes';
  sidePanelContent = 'Selecione um espaço para construir.';

  showCityMap() {
    this.currentView = 'city';
  }

  showGlobalMap() {
    this.currentView = 'global';
  }

  onCellClick(cell: any) {
    this.selectedCell = cell;
  }

  build(building: any) {
    if (this.selectedCell) {
      this.selectedCell.building = building.name;
    }
  }
}
