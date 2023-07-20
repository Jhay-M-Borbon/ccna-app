import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasictopologyPage } from './basictopology.page';

describe('BasictopologyPage', () => {
  let component: BasictopologyPage;
  let fixture: ComponentFixture<BasictopologyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasictopologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
