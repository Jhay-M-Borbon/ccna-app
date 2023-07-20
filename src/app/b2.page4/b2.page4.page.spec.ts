import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page4Page } from './b2.page4.page';

describe('B2Page4Page', () => {
  let component: B2Page4Page;
  let fixture: ComponentFixture<B2Page4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
