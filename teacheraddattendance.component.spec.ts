import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacheraddattendanceComponent } from './teacheraddattendance.component';

describe('TeacheraddattendanceComponent', () => {
  let component: TeacheraddattendanceComponent;
  let fixture: ComponentFixture<TeacheraddattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacheraddattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacheraddattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
