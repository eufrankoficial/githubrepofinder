import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoLogoComponent } from './repo-logo.component';

describe('RepoLogoComponent', () => {
  let component: RepoLogoComponent;
  let fixture: ComponentFixture<RepoLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
