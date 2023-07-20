import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button1Page } from './button1.page';

describe('Button1Page', () => {
  let component: Button1Page;
  let fixture: ComponentFixture<Button1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Button1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
