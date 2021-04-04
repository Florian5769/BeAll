import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidYouKnewComponent } from './did-you-knew.component';

describe('DidYouKnewComponent', () => {
  let component: DidYouKnewComponent;
  let fixture: ComponentFixture<DidYouKnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidYouKnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DidYouKnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
