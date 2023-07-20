import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ETHERCHANNELPage } from './etherchannel.page';

describe('ETHERCHANNELPage', () => {
  let component: ETHERCHANNELPage;
  let fixture: ComponentFixture<ETHERCHANNELPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ETHERCHANNELPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
