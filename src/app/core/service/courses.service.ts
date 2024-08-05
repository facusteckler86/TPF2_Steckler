import { Injectable } from "@angular/core";
import { Course } from "../../features/dashboard/courses/models";
import { map, Observable } from "rxjs";


@Injectable({providedIn: "root"})

export class CourseService{
  private MY_DATABASE = [
   {
    id: "01",
    name: "Angular",
    starDate: new Date(),
    endDate: new Date(),
   },
   {
    id:"02",
    name: "JavaScript",
    starDate: new Date(),
    endDate: new Date(),
   },
   {
    id:"03",
    name: "Java",
    starDate: new Date(),
    endDate: new Date(),
   },
   {
    id: "04",
    name:"Python",
    starDate: new Date(),
    endDate: new Date(),
   },
   ];

   editCourseById(id: string, update: Course) {
    this.MY_DATABASE = this.MY_DATABASE.map((el) =>
      el.id === id ? { ...update, id } : el
    );
    return this.getCourses();
  }

   searchCourseByName(search: string): Observable<Course[]>{
    return this.getCourses().pipe(
      map((todosCursos)=>
      todosCursos.filter((curso)=>
      curso.name.toLowerCase().includes(search.toLowerCase())))
    );
   }

   getCourses(): Observable<Course[]>{
      return new Observable((observer)=>{
        setTimeout(()=> {
          observer.next(this.MY_DATABASE);
          observer.complete();
        },750);
      });
   }

   getCourseById(id: string): Observable<Course | undefined> {
    return this.getCourses().pipe(
      map((todosLosCursos) => todosLosCursos.find((el) => el.id === id))
    );
  }

  addCourse(course: Course): Observable<Course[]>{
    this.MY_DATABASE.push(course);
    return this.getCourses();
  }

  deleteCourseById(id: string): Observable<Course[]>{
    this.MY_DATABASE = this.MY_DATABASE.filter((el)=> el.id != id);
    return this.getCourses();
  }


}
