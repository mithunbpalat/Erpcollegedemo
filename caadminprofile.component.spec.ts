import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaadminprofileComponent } from './caadminprofile.component';

describe('CaadminprofileComponent', () => {
  let component: CaadminprofileComponent;
  let fixture: ComponentFixture<CaadminprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaadminprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaadminprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
