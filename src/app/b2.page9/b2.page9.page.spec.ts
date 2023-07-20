import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page9Page } from './b2.page9.page';

describe('B2Page9Page', () => {
  let component: B2Page9Page;
  let fixture: ComponentFixture<B2Page9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
