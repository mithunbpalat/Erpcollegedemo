import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaaddeventComponent } from './caaddevent.component';

describe('CaaddeventComponent', () => {
  let component: CaaddeventComponent;
  let fixture: ComponentFixture<CaaddeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaaddeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaaddeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
