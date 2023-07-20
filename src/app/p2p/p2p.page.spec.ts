import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P2pPage } from './p2p.page';

describe('P2pPage', () => {
  let component: P2pPage;
  let fixture: ComponentFixture<P2pPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(P2pPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
