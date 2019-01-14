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
  MatSnackBarModule,
  MatListModule,
  MatDividerModule
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
    MatSnackBarModule,
    MatListModule,
    MatDividerModule
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
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule
  ],
})

export class MaterialModule { }
