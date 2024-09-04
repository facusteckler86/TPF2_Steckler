import { Course } from "../../courses/models";

export interface Enrollment {
  id: string;
  studentsId: string;
  courseId: string;
}

export interface Student {
  id: string;
  name: string;
  apellido: string

}

export interface LoadStudentsAndCoursesResponse{
  students: Student[],
  courses:Course[]
}

export interface CreateEnrollmentPayload{
  studentsId: string,
  courseId: string
}
