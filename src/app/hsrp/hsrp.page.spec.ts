import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HSRPPage } from './hsrp.page';

describe('HSRPPage', () => {
  let component: HSRPPage;
  let fixture: ComponentFixture<HSRPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HSRPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
