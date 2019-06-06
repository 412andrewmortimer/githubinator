import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dg-search-form',
  template: `
    <form #searchForm="ngForm" (ngSubmit)="onSubmit(searchTerm)">
      <mat-form-field class="search">
        <input ngModel #searchTerm="ngModel" matInput placeholder="enter query here" name="search" />
      </mat-form-field>
      <button mat-raised-button color="primary" type="submit">
        Fire Ze Missiles!
      </button>
    </form>
    <div *ngFor="let repo of repositoryIndex">
      <mat-card>{{ repo.full_name }}</mat-card>
    </div>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
      }
      .search {
        flex-direction: row;
        text-align: center;
      }
      button {
        flex-direction: row;
        margin: 0 auto;
        text-align: center;
        width: 12rem;
      }
    `
  ]
})
export class GithubFormComponent {
  searchTerm;
  repositoryIndex;

  constructor(private githubService: GithubService) {}

  onSubmit(searchTerm: NgForm) {
    this.githubService.searchRepos(searchTerm.value)
      .subscribe(response => this.repositoryIndex = response.items, error => console.log(error));
    searchTerm.reset();
  }
}
