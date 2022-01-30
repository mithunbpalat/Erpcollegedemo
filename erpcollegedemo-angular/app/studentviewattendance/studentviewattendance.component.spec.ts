import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewattendanceComponent } from './studentviewattendance.component';

describe('StudentviewattendanceComponent', () => {
  let component: StudentviewattendanceComponent;
  let fixture: ComponentFixture<StudentviewattendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewattendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
