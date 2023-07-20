import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page8Page } from './b2.page8.page';

describe('B2Page8Page', () => {
  let component: B2Page8Page;
  let fixture: ComponentFixture<B2Page8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
