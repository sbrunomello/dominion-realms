import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [CommonModule], // Adicione os módulos aqui
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class MapComponent {
  @Input() cells: any[] = [];
  @Output() cellClick = new EventEmitter<any>();

  onCellClick(cell: any) {
    this.cellClick.emit(cell);
  }
}
