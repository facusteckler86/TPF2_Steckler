import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../courses/models';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.css'
})
export class CoursesDialogComponent {

courseForm: FormGroup;

constructor(private fb: FormBuilder,
            private matDialogRef : MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editingCourse?: Course) {

    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      starDate: [],
      endDate: [],
    })
  }
    onSubmit(): void {
      console.log(this.courseForm.value);

      this.matDialogRef.close(this.courseForm.value);
    }
}
