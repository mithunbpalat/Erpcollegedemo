import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacheruploadresultsComponent } from './teacheruploadresults.component';

describe('TeacheruploadresultsComponent', () => {
  let component: TeacheruploadresultsComponent;
  let fixture: ComponentFixture<TeacheruploadresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacheruploadresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacheruploadresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
