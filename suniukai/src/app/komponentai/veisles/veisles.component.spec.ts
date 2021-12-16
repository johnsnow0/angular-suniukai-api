import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeislesComponent } from './veisles.component';

describe('VeislesComponent', () => {
  let component: VeislesComponent;
  let fixture: ComponentFixture<VeislesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeislesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeislesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
