import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovernantPage } from './governant.page';

describe('GovernantPage', () => {
  let component: GovernantPage;
  let fixture: ComponentFixture<GovernantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
