import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuttingPractiseComponent } from './putting-practise.component';

describe('PuttingPractiseComponent', () => {
  let component: PuttingPractiseComponent;
  let fixture: ComponentFixture<PuttingPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuttingPractiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuttingPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
