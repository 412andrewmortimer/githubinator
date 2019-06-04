import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule],
  exports: [MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule]
})
export class AngularMaterialDependenciesModule {}
