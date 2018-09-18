import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule],
})

export class MaterialModule { }