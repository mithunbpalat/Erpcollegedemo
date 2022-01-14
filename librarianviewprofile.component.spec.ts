import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianviewprofileComponent } from './librarianviewprofile.component';

describe('LibrarianviewprofileComponent', () => {
  let component: LibrarianviewprofileComponent;
  let fixture: ComponentFixture<LibrarianviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianviewprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
