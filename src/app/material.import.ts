import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatCardModule, 
  MatDialogModule, 
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule, MatProgressBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDialogModule, MatProgressBarModule],
})

export class MaterialModule { }
