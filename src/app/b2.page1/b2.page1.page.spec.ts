import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page1Page } from './b2.page1.page';

describe('B2Page1Page', () => {
  let component: B2Page1Page;
  let fixture: ComponentFixture<B2Page1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
