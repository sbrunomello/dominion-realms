import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

export const mockRegions = Array.from({ length: 16 }, (_, y) =>
  Array.from({ length: 16 }, (_, x) => ({
    id: `${x}_${y}`,
    x,
    y,
    food: Math.floor(Math.random() * 100),
    iron: Math.floor(Math.random() * 100),
    wood: Math.floor(Math.random() * 100),
    stone: Math.floor(Math.random() * 100),
    owner: null,
  }))
);

@Component({
  selector: 'app-global-map',
  templateUrl: './global-map.page.html',
  styleUrls: ['./global-map.page.scss'],
  standalone: true,
  imports: [IonContent, IonTitle, IonToolbar, IonHeader,  CommonModule, FormsModule],
})
export class GlobalMapPage implements OnInit {
  regions: any[] = []; // Lista para armazenar os dados das células
  transformStyle = 'scale(1)'; // Controle do zoom
  translateX = -240; // Centraliza o mapa horizontalmente (tamanho inicial 16 * 30 / 2)
  translateY = -240; // Centraliza o mapa verticalmente (tamanho inicial 16 * 30 / 2)
  isDragging = false;
  lastMouseX = 0;
  lastMouseY = 0;

  ngOnInit() {
    this.loadMockData();
  }

  // Carrega os dados do mock
  loadMockData() {
    this.regions = mockRegions.flat(); // Achata a matriz 16x16 para um array linear
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const deltaX = event.clientX - this.lastMouseX;
    const deltaY = event.clientY - this.lastMouseY;

    this.translateX += deltaX;
    this.translateY += deltaY;

    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
  }

  onMouseUp() {
    this.isDragging = false;
  }

  onWheel(event: WheelEvent) {
    const scaleChange = event.deltaY > 0 ? 0.9 : 1.1;
    const currentScale = parseFloat(this.transformStyle.slice(6, -1));
    const newScale = Math.max(0.5, Math.min(2, currentScale * scaleChange));
    this.transformStyle = `scale(${newScale})`;
  }

  onCellClick(cell: any) {
    console.log('Cell clicked:', cell);
  }
}
