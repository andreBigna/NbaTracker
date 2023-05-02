import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaScoresComponent } from './nba-scores.component';

describe('nbaScoresComponent', () => {
  let component: NbaScoresComponent;
  let fixture: ComponentFixture<NbaScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbaScoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NbaScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
