import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaTrackerComponent } from './nba-tracker.component';

describe('NbaTrackerComponent', () => {
  let component: NbaTrackerComponent;
  let fixture: ComponentFixture<NbaTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbaTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
