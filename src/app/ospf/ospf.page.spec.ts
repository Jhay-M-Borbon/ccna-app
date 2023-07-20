import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OSPFPage } from './ospf.page';

describe('OSPFPage', () => {
  let component: OSPFPage;
  let fixture: ComponentFixture<OSPFPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OSPFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
