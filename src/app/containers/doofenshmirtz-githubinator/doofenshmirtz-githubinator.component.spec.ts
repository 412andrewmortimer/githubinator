import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DoofenshmirtzGithubinatorComponent } from './doofenshmirtz-githubinator.component';

describe('DoofenshmirtzGithubinatorComponent', () => {
  let component: DoofenshmirtzGithubinatorComponent;
  let fixture: ComponentFixture<DoofenshmirtzGithubinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoofenshmirtzGithubinatorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
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
