import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OSPFIPv4Page } from './ospfipv4.page';

describe('OSPFIPv4Page', () => {
  let component: OSPFIPv4Page;
  let fixture: ComponentFixture<OSPFIPv4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OSPFIPv4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
