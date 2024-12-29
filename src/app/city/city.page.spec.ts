import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityPage } from './city.page';

describe('CityPage', () => {
  let component: CityPage;
  let fixture: ComponentFixture<CityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
