import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import * as modules from './modules';
import * as services from './services';
import { DoofenshmirtzGithubinatorComponent } from './containers/doofenshmirtz-githubinator/doofenshmirtz-githubinator.component';
import { GithubFormComponent } from './components/github-form/github-form.component';

const routes: Route[] = [
  {
    path: 'doofenshmirtz-githubinator',
    component: DoofenshmirtzGithubinatorComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'doofenshmirtz-githubinator'
  },
  { path: '**', redirectTo: 'doofenshmirtz-githubinator' }
];

@NgModule({
  declarations: [AppComponent, DoofenshmirtzGithubinatorComponent, GithubFormComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    modules.AngularMaterialDependenciesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [services.GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {}
