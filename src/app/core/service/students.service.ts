import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { students } from "../../features/dashboard/courses/models";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class StudentsService{
constructor(private http: HttpClient){}

private baseURL = environment.apiURL + '/students';

getStudents(): Observable<students[]>{
  return this.http.get<students[]>(this.baseURL)
}

deleteStudentsById(id: string){
  return this.http.delete<students[]>(this.baseURL + '/' + id)
}
}
