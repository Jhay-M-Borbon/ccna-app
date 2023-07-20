import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B1Page3Page } from './b1.page3.page';

describe('B1Page3Page', () => {
  let component: B1Page3Page;
  let fixture: ComponentFixture<B1Page3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B1Page3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
