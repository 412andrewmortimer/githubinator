import { Component } from '@angular/core';
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
    <mat-divider></mat-divider>
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
        margin: 0 auto;
        text-align: center;
        width: 17rem;
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

  onSubmit(searchTerm: NgForm) {
    console.log(searchTerm.value);
    searchTerm.reset();
  }
}
