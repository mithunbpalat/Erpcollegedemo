import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewresultsComponent } from './studentviewresults.component';

describe('StudentviewresultsComponent', () => {
  let component: StudentviewresultsComponent;
  let fixture: ComponentFixture<StudentviewresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
