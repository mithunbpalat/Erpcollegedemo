import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewassignmentsComponent } from './studentviewassignments.component';

describe('StudentviewassignmentsComponent', () => {
  let component: StudentviewassignmentsComponent;
  let fixture: ComponentFixture<StudentviewassignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewassignmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
