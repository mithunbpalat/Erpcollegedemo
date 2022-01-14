import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewbooksComponent } from './studentviewbooks.component';

describe('StudentviewbooksComponent', () => {
  let component: StudentviewbooksComponent;
  let fixture: ComponentFixture<StudentviewbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentviewbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentviewbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
