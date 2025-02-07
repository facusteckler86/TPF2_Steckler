import { Course, students } from "../../courses/models";

export interface Enrollment {
  id: string;
  studentsId: string;
  courseId: string;
}


export interface LoadstudentsAndCoursesResponse{
  students: students[],
  course:Course[]
}

export interface CreateEnrollmentPayload{
  studentsId: string,
  courseId: string
}



function trackByFn(index: any, number: any, item: any, any: any) {
  throw new Error("Function not implemented.");
}
