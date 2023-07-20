import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page5Page } from './b2.page5.page';

describe('B2Page5Page', () => {
  let component: B2Page5Page;
  let fixture: ComponentFixture<B2Page5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
