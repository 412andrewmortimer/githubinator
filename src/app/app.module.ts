import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import * as modules from './modules';
import { DoofenshmirtzGithubinatorComponent } from './containers/doofenshmirtz-githubinator/doofenshmirtz-githubinator.component';
import { GithubFormComponent } from './components/github-form/github-form.component';

@NgModule({
  declarations: [AppComponent, DoofenshmirtzGithubinatorComponent, GithubFormComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, modules.AngularMaterialDependenciesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
