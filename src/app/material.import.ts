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
  MatListModule
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
    MatListModule
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
    MatListModule
  ],
})

export class MaterialModule { }
