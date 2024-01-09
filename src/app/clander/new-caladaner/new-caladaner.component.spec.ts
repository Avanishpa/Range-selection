import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCaladanerComponent } from './new-caladaner.component';

describe('NewCaladanerComponent', () => {
  let component: NewCaladanerComponent;
  let fixture: ComponentFixture<NewCaladanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCaladanerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCaladanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
