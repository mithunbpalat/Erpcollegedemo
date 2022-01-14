import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentvieweventComponent } from './studentviewevent.component';

describe('StudentvieweventComponent', () => {
  let component: StudentvieweventComponent;
  let fixture: ComponentFixture<StudentvieweventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentvieweventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentvieweventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
