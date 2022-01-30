import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianbookComponent } from './librarianbook.component';

describe('LibrarianbookComponent', () => {
  let component: LibrarianbookComponent;
  let fixture: ComponentFixture<LibrarianbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
