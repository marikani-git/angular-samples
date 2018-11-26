import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  @Input() student = {} as Student;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  createStudent = () => {
    this.studentService.createStudent(this.student);
    this.router.navigate(['/student-list']);
  }

}
