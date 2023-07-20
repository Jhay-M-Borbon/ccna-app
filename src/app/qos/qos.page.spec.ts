import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QosPage } from './qos.page';

describe('QosPage', () => {
  let component: QosPage;
  let fixture: ComponentFixture<QosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
