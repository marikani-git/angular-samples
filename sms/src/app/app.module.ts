import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SMSConstant } from './constants/sms-constants';
import { ChildCompComponent } from './student-list/child-comp/child-comp.component';
import { StudentService } from './student.service';

const smsRouteConfig: Routes = [
  { path: SMSConstant.STUDENT_LIST, component: StudentListComponent },
  { path: 'create', component: CreateStudentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(smsRouteConfig, {
      enableTracing: false,
      useHash: true,
      errorHandler: (error) => {
      }
    }),
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  exports: [StudentListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
