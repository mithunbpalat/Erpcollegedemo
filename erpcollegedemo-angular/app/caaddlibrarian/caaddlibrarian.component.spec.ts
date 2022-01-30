import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddlibrarianComponent } from './caaddlibrarian.component';

describe('CaaddlibrarianComponent', () => {
  let component: CaaddlibrarianComponent;
  let fixture: ComponentFixture<CaaddlibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaaddlibrarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddlibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
