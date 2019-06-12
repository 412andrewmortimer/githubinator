import { Component } from '@angular/core';
import { Repository } from 'src/app/models';

@Component({
  selector: 'dg-doofenshmirtz-githubinator',
  template: `
    <mat-toolbar color="primary">
      <span>Doofenshmirtz Github Topicinator 9001</span>
    </mat-toolbar>
    <dg-search-form class="search-form" (executedSearch)="setRepositories($event)"></dg-search-form>
    <dg-github-repo-index [repos]="repos"></dg-github-repo-index>
  `
})
export class DoofenshmirtzGithubinatorComponent {
  repos: Repository[];

  setRepositories(value) {
    this.repos = value;
  }
}
