import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrePage } from './gre.page';

describe('GrePage', () => {
  let component: GrePage;
  let fixture: ComponentFixture<GrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
