import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaticroutingPage } from './staticrouting.page';

describe('StaticroutingPage', () => {
  let component: StaticroutingPage;
  let fixture: ComponentFixture<StaticroutingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StaticroutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
