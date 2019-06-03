import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GithubFormComponent } from './github-form.component';

describe('GithubFormComponent', () => {
  let component: GithubFormComponent;
  let fixture: ComponentFixture<GithubFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GithubFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
