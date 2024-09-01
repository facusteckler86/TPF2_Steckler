import { Course } from "../../courses/models";

export interface Enrollment {
  id: string;
  studentId: string;
  productId: string;
}

export interface Student {
  id: string;
  name: string;
  apellido: string;
  email: string;
  token: string;
  role: string
}

export interface LoadStudentsAndCoursesResponse{
  students: Student[],
  courses:Course[]
}
