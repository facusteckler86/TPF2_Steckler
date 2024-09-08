import { ComponentFixture, TestBed } from '@angular/core/testing';

import { studentsComponent } from './students.component';

describe('studentsComponent', () => {
  let component: studentsComponent;
  let fixture: ComponentFixture<studentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [studentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(studentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
