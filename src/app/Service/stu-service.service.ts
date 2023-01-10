import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class StuServiceService {

  constructor(private http:HttpClient) { }


  getStudents():Observable<any>{
    return this.http.get("http://localhost:3000/Students");
  }
  addStudent(data:any):Observable<object>{
    return this.http.post("http://localhost:3000/Students", data);
  }
  updateStudent(data:any, id:number):Observable<any>{
    return this.http.put("http://localhost:3000/Students/"+id, data);
  }
  deleteStudent(id:number):Observable<any>{
    return this.http.delete("http://localhost:3000/Students/"+id);
  }
}
