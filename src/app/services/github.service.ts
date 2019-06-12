import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Repository } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  searchGithubRepos = ' https://api.github.com/search/repositories?q=topic:';

  constructor(private http: HttpClient) {}
  searchRepos(term: string) {
    const headerConfig = {
      headers: new HttpHeaders({
        Accept: 'application/vnd.github.mercy-preview+json'
      })
    };
    const repositoryTopicSearch = this.searchGithubRepos + `${term}`;
    return this.http.get<any>(repositoryTopicSearch, headerConfig);
  }
}
