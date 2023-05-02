import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaScoresDetailComponent } from './team-scores-detail.component';

describe('TeamScoresDetailComponent', () => {
  let component: NbaScoresDetailComponent;
  let fixture: ComponentFixture<NbaScoresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbaScoresDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NbaScoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
