import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoIndexComponent } from './github-repo-index.component';

describe('GithubRepoIndexComponent', () => {
  let component: GithubRepoIndexComponent;
  let fixture: ComponentFixture<GithubRepoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRepoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
