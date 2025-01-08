import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dominions',
  templateUrl: './dominions.page.html',
  styleUrls: ['./dominions.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DominionsPage implements OnInit {
  player: any = {};
  resources: any[] = [];
  selectedRegion: any = null;
  xpPercentage: number = 0;
  cells: any[] = [];

  constructor(private router: Router) {}


  ngOnInit() {
    this.initializeGlobalMap();
  }

  initializeGlobalMap() {
    for (let i = 1; i <= 256; i++) {
      this.cells.push({ id: i, owner: i % 3 === 0 ? 'Aurora' : null });
    }
  }

  getInitialOwner(regionId: number): string | null {
    // Define as nações iniciais
    if (regionId === 1) return 'Aurora';
    if (regionId === 16) return 'Valtor';
    if (regionId === 256) return 'Zenith';
    return null;
  }

  selectRegion(region: any) {
    this.selectedRegion = region;
  }

  vote(action: string) {
    // Mock de ação de votação
    alert(`Voto para ${action} na região ${this.selectedRegion.id}`);
  }

  onCellClick(cell: any): void {
    this.selectRegion(cell);
    alert(`Você clicou na região: ${cell.id}`);
  }
  
}
