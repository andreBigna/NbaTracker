import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaScoresTrackerComponent } from './nba-scores-tracker.component';

describe('NbaTrackerComponent', () => {
  let component: NbaScoresTrackerComponent;
  let fixture: ComponentFixture<NbaScoresTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbaScoresTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NbaScoresTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
