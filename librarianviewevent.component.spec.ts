import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianvieweventComponent } from './librarianviewevent.component';

describe('LibrarianvieweventComponent', () => {
  let component: LibrarianvieweventComponent;
  let fixture: ComponentFixture<LibrarianvieweventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianvieweventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianvieweventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
