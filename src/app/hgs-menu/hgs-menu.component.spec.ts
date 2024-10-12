import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HGSMenuComponent } from './hgs-menu.component';

describe('HGSMenuComponent', () => {
  let component: HGSMenuComponent;
  let fixture: ComponentFixture<HGSMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HGSMenuComponent]
    });
    fixture = TestBed.createComponent(HGSMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
