import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoofenshmirtzGithubinatorComponent } from './doofenshmirtz-githubinator.component';

describe('DoofenshmirtzGithubinatorComponent', () => {
  let component: DoofenshmirtzGithubinatorComponent;
  let fixture: ComponentFixture<DoofenshmirtzGithubinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoofenshmirtzGithubinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoofenshmirtzGithubinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
