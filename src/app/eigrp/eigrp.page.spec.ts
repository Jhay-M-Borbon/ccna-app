import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EIGRPPage } from './eigrp.page';

describe('EIGRPPage', () => {
  let component: EIGRPPage;
  let fixture: ComponentFixture<EIGRPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EIGRPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
