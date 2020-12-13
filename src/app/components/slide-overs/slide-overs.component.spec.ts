import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOversComponent } from './slide-overs.component';

describe('SlideOversComponent', () => {
  let component: SlideOversComponent;
  let fixture: ComponentFixture<SlideOversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideOversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideOversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
