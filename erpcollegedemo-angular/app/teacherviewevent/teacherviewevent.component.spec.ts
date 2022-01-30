import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachervieweventComponent } from './teacherviewevent.component';

describe('TeachervieweventComponent', () => {
  let component: TeachervieweventComponent;
  let fixture: ComponentFixture<TeachervieweventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachervieweventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachervieweventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
