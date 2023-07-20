import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicroutingPage } from './dynamicrouting.page';

describe('DynamicroutingPage', () => {
  let component: DynamicroutingPage;
  let fixture: ComponentFixture<DynamicroutingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DynamicroutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
