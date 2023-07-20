import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VLANsPage } from './vlans.page';

describe('VLANsPage', () => {
  let component: VLANsPage;
  let fixture: ComponentFixture<VLANsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VLANsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
