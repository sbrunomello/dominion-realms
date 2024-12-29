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
  isModalOpen = false;

  player = {
    name: 'Capivara Master',
    avatar: 'assets/avatar.jpg',
    level: 6,
    xp: 150,
    nextLevelXp: 300,
  };

  menuButtons = [
    { icon: 'map-outline' },
    { icon: 'stats-chart-outline' },
    { icon: 'bag-outline' },
    { icon: 'construct-outline' },
  ];

  resources = [
    { icon: '🌾', amount: 1000 },
    { icon: '🌲', amount: 800 },
    { icon: '⛏️', amount: 750 },
    { icon: '⚒️', amount: 500 },
    { icon: '💰', amount: 300 },
  ];

  buildings = [
    { name: 'Farm', emoji: '🌾' },
    { name: 'Lumber Mill', emoji: '🪵' },
    { name: 'Quarry', emoji: '⛏️' },
    { name: 'Iron Mine', emoji: '⚒️' },
    { name: 'Gold Mine', emoji: '🏆' },
  ];

  openBuildModal(cell: any) {
    this.selectedCell = cell;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  build(building: any) {
    if (this.selectedCell) {
      this.selectedCell.building = building.name;
    }
    this.closeModal();
  }

  get xpPercentage(): number {
    return (this.player.xp / this.player.nextLevelXp) * 100;
  }

  leftPanelData = [
    {
      title: "Sem Aliança",
      icon: "people-outline",
      content: "Você ainda não tem uma aliança.",
      button: null,
    },
    {
      title: "Info Box",
      icon: "information-circle-outline",
      content: "Sua Plus Account expirou.",
      button: {
        text: "Ativar",
        icon: "cash-outline",
        action: () => {
          console.log("Ativar Plus Account");
        },
      },
    },
  ];

  cityDetails = {
    title: "Cidades",
    icon: "home-outline",
    cityCount: '1/1',
    cityName: "Cidade da Capivara",
    progress: 0.7,
  };
  
}
