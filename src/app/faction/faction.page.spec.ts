import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactionPage } from './faction.page';

describe('FactionPage', () => {
  let component: FactionPage;
  let fixture: ComponentFixture<FactionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
