import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaScoresHeaderComponent } from './nba-scores-header.component';

describe('TeamScoresHeaderComponent', () => {
  let component: NbaScoresHeaderComponent;
  let fixture: ComponentFixture<NbaScoresHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbaScoresHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NbaScoresHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
