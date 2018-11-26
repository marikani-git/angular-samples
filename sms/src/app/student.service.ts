import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './model/student.model';
import { Subject } from 'rxjs';

@Injectable()
export class StudentService {
  getStudentsUrl = 'http://localhost:3000/students';
  createStudentsUrl = 'http://localhost:3000/students';

  studentSubj = new Subject();
  constructor(private http: HttpClient) {
    this.http.get<Student[]>(this.getStudentsUrl).subscribe(data => this.studentSubj.next(data));
  }

  getAllStudents = () => {
    return this.http.get<Student[]>(this.getStudentsUrl);
  }

  createStudent = (student: Student) => {
    this.http.post(this.getStudentsUrl, student).subscribe(data => console.log(data));
  }
}
