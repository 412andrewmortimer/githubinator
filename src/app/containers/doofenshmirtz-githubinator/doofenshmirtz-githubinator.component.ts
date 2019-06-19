import { Component } from '@angular/core';
import { Repository } from 'src/app/models';

@Component({
  selector: 'dg-doofenshmirtz-githubinator',
  template: `
    <mat-toolbar color="primary">
      <span>Doofenshmirtz Github Topicinator 9001</span>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened role="region">
        <h1>Topic Search</h1>
        <dg-search-form class="search-form" (executedSearch)="setRepositories($event)"></dg-search-form>
      </mat-sidenav>
      <mat-sidenav-content role="region">
        <dg-github-repo-index [repos]="repos"></dg-github-repo-index>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      :host {
        height: 100vh;
        display: grid;
        grid-template:
          'toolbar'
          'page-container' 1fr;
      }

      h1 {
        grid-area: title;
      }

      mat-toolbar {
        grid-area: toolbar;
        display: grid;
        grid-template:
          'title menu' auto
          / 1fr 50px;
      }

      mat-sidenav-container {
        grid-area: page-container;
      }

      mat-sidenav-content {
        padding: 16px;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto, 280px);
        background-image: url(https://raw.githubusercontent.com/412andrewmortimer/githubinator/master/src/assets/img/doof.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }

      dl {
        display: grid;
        grid-template-columns: 2fr 3fr;
      }

      dd {
        margin-inline-start: 0;
      }

      mat-sidenav {
        padding-left: 1rem;
        width: 310px;
      }
    `
  ]
})
export class DoofenshmirtzGithubinatorComponent {
  repos: Repository[];

  setRepositories(value) {
    this.repos = value;
  }
}
