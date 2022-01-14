import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaddcollegeComponent } from './saddcollege.component';

describe('SaddcollegeComponent', () => {
  let component: SaddcollegeComponent;
  let fixture: ComponentFixture<SaddcollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaddcollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaddcollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
