import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page2Page } from './b2.page2.page';

describe('B2Page2Page', () => {
  let component: B2Page2Page;
  let fixture: ComponentFixture<B2Page2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
