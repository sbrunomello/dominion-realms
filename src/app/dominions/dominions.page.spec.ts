import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DominionsPage } from './dominions.page';

describe('DominionsPage', () => {
  let component: DominionsPage;
  let fixture: ComponentFixture<DominionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DominionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
