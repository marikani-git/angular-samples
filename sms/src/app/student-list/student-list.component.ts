import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../model/student.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Observable<Student[]>;
  valuFromChild = '';
  valFromParent = 'data from student-list';
  constructor(private studentService: StudentService) { this.getAllStudents(); }

  ngOnInit() {
  }

  getAllStudents = () => {
    this.students = this.studentService.getAllStudents();
    this.studentService.studentSubj.subscribe({
      next: (students) => console.log(students)
    });
  }

  printValue = (data: any) => {
    this.valuFromChild = 'object return from child ' + data.name + data.dept;
  }

}
