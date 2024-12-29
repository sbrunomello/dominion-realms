import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegionMapPage } from './region-map.page';

describe('RegionMapPage', () => {
  let component: RegionMapPage;
  let fixture: ComponentFixture<RegionMapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
