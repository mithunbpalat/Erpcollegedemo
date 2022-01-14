import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddteacherComponent } from './caaddteacher.component';

describe('CaaddteacherComponent', () => {
  let component: CaaddteacherComponent;
  let fixture: ComponentFixture<CaaddteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaaddteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
