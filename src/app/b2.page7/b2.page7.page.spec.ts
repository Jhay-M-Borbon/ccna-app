import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page7Page } from './b2.page7.page';

describe('B2Page7Page', () => {
  let component: B2Page7Page;
  let fixture: ComponentFixture<B2Page7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
