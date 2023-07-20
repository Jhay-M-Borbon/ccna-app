import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RipPage } from './rip.page';

describe('RipPage', () => {
  let component: RipPage;
  let fixture: ComponentFixture<RipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
