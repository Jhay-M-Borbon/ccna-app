import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page3Page } from './b2.page3.page';

describe('B2Page3Page', () => {
  let component: B2Page3Page;
  let fixture: ComponentFixture<B2Page3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
