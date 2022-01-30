import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeadminloginComponent } from './collegeadminlogin.component';

describe('CollegeadminloginComponent', () => {
  let component: CollegeadminloginComponent;
  let fixture: ComponentFixture<CollegeadminloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeadminloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeadminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
