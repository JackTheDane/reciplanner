import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatCardModule, 
  MatDialogModule, 
  MatProgressBarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule, 
    MatDialogModule, 
    MatProgressBarModule, 
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule, 
    MatDialogModule, 
    MatProgressBarModule, 
    MatIconModule,
    MatProgressSpinnerModule
  ],
})

export class MaterialModule { }
