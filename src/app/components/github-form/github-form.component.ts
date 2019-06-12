import { Component, EventEmitter, Output } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { NgForm } from '@angular/forms';
import { Repository } from 'src/app/models';

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
  @Output() executedSearch = new EventEmitter<Repository[]>();

  searchTerm;
  repositoryIndex: Repository[] = [];

  constructor(private githubService: GithubService) {}

  onSubmit(searchTerm: NgForm) {
    this.githubService
      .searchRepos(searchTerm.value)
      .subscribe(
        response => ((this.repositoryIndex = response.items), this.executedSearch.emit(this.repositoryIndex)),
        error => console.log(error)
      );

    searchTerm.reset();
  }
}
