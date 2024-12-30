import { Component } from '@angular/core';
import { mockCityDetails, mockRegions, constructionMocks } from '../services/mock.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definição explícita do tipo para `constructionMocks`
type BuildingCategory = 'infra' | 'militar' | 'recursos';

interface Building {
  name: string;
  description: string;
  costs: {
    food: number;
    wood: number;
    stone: number;
    iron: number;
  };
  buildTime: string;
  prerequisites: string;
  image: string;
}

@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class GamePage {
  cityMap = mockCityDetails;
  selectedCell: any = null;
  globalMap = mockRegions;
  currentView = 'city';
  isModalOpen = false;
  isPanelOpen = false;


  //selectedTab: BuildingCategory = 'infra'; // Aba inicial
  currentBuildings: Building[] = []; // Lista de prédios da aba selecionada

  // Mock de construções com tipo explícito
  //buildingsMock: Record<BuildingCategory, Building[]> = constructionMocks;

  constructor() {
    this.updateBuildings();
  }
  
  closePanel() {
    this.isPanelOpen = false;
  }

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
    { image: '/assets/meat.png', amount: 1000 },
    { image: '/assets/wood.png', amount: 800 },
    { image: '/assets/stone.png', amount: 750 },
    { image: '/assets/iron.png', amount: 500 },
    { image: '/assets/gold.png', amount: 300 },
  ];
  

  selectedTab: string = 'infra';

  infraBuildings = constructionMocks.infra;

  militarBuildings = constructionMocks.militar;

  resourceBuildings = constructionMocks.recursos;

  changeTab(tab: string): void {
    this.selectedTab = tab;
    this.updateBuildings();
  }

  updateBuildings(): void {
    if (this.selectedTab === 'infra') {
      this.currentBuildings = this.infraBuildings;
    } else if (this.selectedTab === 'militar') {
      this.currentBuildings = this.militarBuildings;
    } else if (this.selectedTab === 'recursos') {
      this.currentBuildings = this.resourceBuildings;
    }
  }
  
    
  
    /* Atualiza a lista de construções com base na aba ativa
    updateBuildings() {
      this.currentBuildings = this.buildingsMock[this.selectedTab];
    }
  
    // Altera a aba ativa e atualiza as construções
    changeTab(event: any) {
      this.selectedTab = event.detail.value;
      this.updateBuildings();
    }*/
  
    // Abre o modal de construção
    openBuildModal(cell: any) {
      this.selectedCell = cell;
      this.isModalOpen = true;
    }
  
    // Fecha o modal de construção
    closeModal() {
      this.isModalOpen = false;
    }
  
    // Simula a construção
    build(building: any) {
      console.log(`Construindo: ${building.name}`);
      this.closeModal();
    }

    togglePanel(): void {
      this.isPanelOpen = !this.isPanelOpen;
    }

 /* updateBuildings() {
    // Atualiza os prédios com base na aba selecionada
    this.currentBuildings = this.buildingsMock[this.selectedTab];
  }

  changeTab(event: any) {
    this.selectedTab = event.detail.value as BuildingCategory; // Garante que seja um dos tipos definidos
    this.updateBuildings();
  }

  build(building: Building) {
    console.log(`Construindo: ${building.name}`);
    if (this.selectedCell) {
      this.selectedCell.building = building.name;
    }
    this.closeModal();
  }

  openBuildModal(cell: any) {
    this.selectedCell = cell;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }*/

  get xpPercentage(): number {
    return (this.player.xp / this.player.nextLevelXp) * 100;
  }

  leftPanelData = [
    {
      title: 'Sem Aliança',
      icon: 'people-outline',
      content: 'Você ainda não tem uma aliança.',
      button: null,
    },
    {
      title: 'Info Box',
      icon: 'information-circle-outline',
      content: 'Sua Plus Account expirou.',
      button: {
        text: 'Ativar',
        icon: 'cash-outline',
        action: () => {
          console.log('Ativar Plus Account');
        },
      },
    },
  ];

  cityDetails = {
    title: 'Cidades',
    icon: 'home-outline',
    cityCount: '1/1',
    cityName: 'Cidade da Capivara',
    progress: 0.7,
  };
}
