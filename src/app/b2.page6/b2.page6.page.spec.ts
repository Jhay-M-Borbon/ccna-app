import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2Page6Page } from './b2.page6.page';

describe('B2Page6Page', () => {
  let component: B2Page6Page;
  let fixture: ComponentFixture<B2Page6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(B2Page6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
