import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalMapPage } from './global-map.page';

describe('GlobalMapPage', () => {
  let component: GlobalMapPage;
  let fixture: ComponentFixture<GlobalMapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
