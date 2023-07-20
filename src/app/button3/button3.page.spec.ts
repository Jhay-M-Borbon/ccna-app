import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button3Page } from './button3.page';

describe('Button3Page', () => {
  let component: Button3Page;
  let fixture: ComponentFixture<Button3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Button3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
