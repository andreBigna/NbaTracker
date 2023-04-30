import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScoresHeaderComponent } from './team-scores-header.component';

describe('TeamScoresHeaderComponent', () => {
  let component: TeamScoresHeaderComponent;
  let fixture: ComponentFixture<TeamScoresHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamScoresHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScoresHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
