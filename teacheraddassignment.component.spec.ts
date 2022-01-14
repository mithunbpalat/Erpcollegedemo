import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacheraddassignmentComponent } from './teacheraddassignment.component';

describe('TeacheraddassignmentComponent', () => {
  let component: TeacheraddassignmentComponent;
  let fixture: ComponentFixture<TeacheraddassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacheraddassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacheraddassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
