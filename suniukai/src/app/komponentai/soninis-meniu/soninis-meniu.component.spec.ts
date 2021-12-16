import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoninisMeniuComponent } from './soninis-meniu.component';

describe('SoninisMeniuComponent', () => {
  let component: SoninisMeniuComponent;
  let fixture: ComponentFixture<SoninisMeniuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoninisMeniuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoninisMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
