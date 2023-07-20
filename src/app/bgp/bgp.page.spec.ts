import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BGPPage } from './bgp.page';

describe('BGPPage', () => {
  let component: BGPPage;
  let fixture: ComponentFixture<BGPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BGPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
