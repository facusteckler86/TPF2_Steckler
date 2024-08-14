import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-registrer-dialog',
  templateUrl: './registrer-dialog.component.html',
  styleUrl: './registrer-dialog.component.css',
})
export class RegistrerDialogComponent {

  EnrollmentsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<RegistrerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingEnrollments?: RegistrerDialogComponent
  ) {
    this.EnrollmentsForm = this.fb.group({
      name: [null, Validators.required],
      });
    if(this.editingEnrollments){
      this.EnrollmentsForm.patchValue(this.editingEnrollments)
    }
  }
  onSubmit(): void {
    if (this.EnrollmentsForm.valid) {
      this.matDialogRef.close(this.EnrollmentsForm.value);
    } else {

    }
  }
}
