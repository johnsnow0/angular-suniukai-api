import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkeltiSuniukaComponent } from './ikelti-suniuka.component';

describe('IkeltiSuniukaComponent', () => {
  let component: IkeltiSuniukaComponent;
  let fixture: ComponentFixture<IkeltiSuniukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IkeltiSuniukaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IkeltiSuniukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
