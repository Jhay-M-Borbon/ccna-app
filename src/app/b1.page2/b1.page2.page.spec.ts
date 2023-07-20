import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B1Page2Page } from './b1.page2.page';

describe('B1Page2Page', () => {
  let component: B1Page2Page;
  let fixture: ComponentFixture<B1Page2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B1Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
