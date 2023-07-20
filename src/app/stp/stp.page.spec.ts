import { ComponentFixture, TestBed } from '@angular/core/testing';
import { STPPage } from './stp.page';

describe('STPPage', () => {
  let component: STPPage;
  let fixture: ComponentFixture<STPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(STPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
