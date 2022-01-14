import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddtimetableComponent } from './caaddtimetable.component';

describe('CaaddtimetableComponent', () => {
  let component: CaaddtimetableComponent;
  let fixture: ComponentFixture<CaaddtimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaaddtimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
