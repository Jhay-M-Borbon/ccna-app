import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterVlanTrunkingPage } from './inter-vlan-trunking.page';

describe('InterVlanTrunkingPage', () => {
  let component: InterVlanTrunkingPage;
  let fixture: ComponentFixture<InterVlanTrunkingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterVlanTrunkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
