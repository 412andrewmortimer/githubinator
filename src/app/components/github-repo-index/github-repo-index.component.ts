import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/models';

@Component({
  selector: 'dg-github-repo-index',
  template: `
    <div *ngFor="let repo of repos">
      <mat-card>{{ repo.full_name }}</mat-card>
    </div>
  `
})
export class GithubRepoIndexComponent {
  @Input() repos: Repository[];
}
