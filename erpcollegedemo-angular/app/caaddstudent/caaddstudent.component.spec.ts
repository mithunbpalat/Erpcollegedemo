import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddstudentComponent } from './caaddstudent.component';

describe('CaaddstudentComponent', () => {
  let component: CaaddstudentComponent;
  let fixture: ComponentFixture<CaaddstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaaddstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
