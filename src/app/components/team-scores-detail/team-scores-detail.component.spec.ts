import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScoresDetailComponent } from './team-scores-detail.component';

describe('TeamScoresDetailComponent', () => {
  let component: TeamScoresDetailComponent;
  let fixture: ComponentFixture<TeamScoresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamScoresDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
