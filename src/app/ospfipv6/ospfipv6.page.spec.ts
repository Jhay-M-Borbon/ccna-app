import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OSPFIPv6Page } from './ospfipv6.page';

describe('OSPFIPv6Page', () => {
  let component: OSPFIPv6Page;
  let fixture: ComponentFixture<OSPFIPv6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OSPFIPv6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
