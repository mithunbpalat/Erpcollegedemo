import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewtimetableComponent } from './studentviewtimetable.component';

describe('StudentviewtimetableComponent', () => {
  let component: StudentviewtimetableComponent;
  let fixture: ComponentFixture<StudentviewtimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewtimetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
