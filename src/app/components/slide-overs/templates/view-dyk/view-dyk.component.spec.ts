import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDykComponent } from './view-dyk.component';

describe('ViewDykComponent', () => {
  let component: ViewDykComponent;
  let fixture: ComponentFixture<ViewDykComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDykComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
