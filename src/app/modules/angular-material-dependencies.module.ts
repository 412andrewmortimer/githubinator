import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule],
  exports: [MatToolbarModule, MatFormFieldModule, MatInputModule]
})
export class AngularMaterialDependenciesModule {}
