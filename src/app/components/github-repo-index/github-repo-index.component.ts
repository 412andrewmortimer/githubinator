import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/models';

@Component({
  selector: 'dg-github-repo-index',
  template: `
    <mat-card *ngFor="let repo of repos">
      <mat-card-title>{{ repo.name }}</mat-card-title>
      <mat-card-content>
        <dl>
          <dt class="mat-small">Full Name</dt>
          <dd class="mat-body-2">{{ repo.full_name }}</dd>
          <dt class="mat-small">Stars</dt>
          <dd class="mat-body-2">{{ repo.stargazers_count }}</dd>
          <dt class="mat-small">Last Updated</dt>
          <dd class="mat-body-2">({{ repo.updated_at | date: 'short' }})</dd>
        </dl>
      </mat-card-content>
    </mat-card>
  `
})
export class GithubRepoIndexComponent {
  @Input() repos: Repository[];
}
