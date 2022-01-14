import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperadminloginComponent } from './superadminlogin/superadminlogin.component';
import { CollegeadminloginComponent } from './collegeadminlogin/collegeadminlogin.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { LibrarianloginComponent } from './librarianlogin/librarianlogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { SaddcollegeComponent } from './saddcollege/saddcollege.component';
import { CaaddstudentComponent } from './caaddstudent/caaddstudent.component';
import { CaadminprofileComponent } from './caadminprofile/caadminprofile.component';
import { CaaddteacherComponent } from './caaddteacher/caaddteacher.component';
import { CaaddlibrarianComponent } from './caaddlibrarian/caaddlibrarian.component';
import { CaaddtimetableComponent } from './caaddtimetable/caaddtimetable.component';
import { CaaddeventComponent } from './caaddevent/caaddevent.component';
import { TeacheraddassignmentComponent } from './teacheraddassignment/teacheraddassignment.component';
import { TeacherprofileComponent } from './teacherprofile/teacherprofile.component';
import { TeacheraddattendanceComponent } from './teacheraddattendance/teacheraddattendance.component';
import { TeacheruploadresultsComponent } from './teacheruploadresults/teacheruploadresults.component';
import { TeachervieweventComponent } from './teacherviewevent/teacherviewevent.component';
import { LibrarianbookComponent } from './librarianbook/librarianbook.component';
import { LibrarianviewprofileComponent } from './librarianviewprofile/librarianviewprofile.component';
import { LibrarianvieweventComponent } from './librarianviewevent/librarianviewevent.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentviewbooksComponent } from './studentviewbooks/studentviewbooks.component';
import { StudentviewtimetableComponent } from './studentviewtimetable/studentviewtimetable.component';
import { StudentviewassignmentsComponent } from './studentviewassignments/studentviewassignments.component';
import { StudentviewresultsComponent } from './studentviewresults/studentviewresults.component';
import { StudentviewattendanceComponent } from './studentviewattendance/studentviewattendance.component';
import { StudentvieweventComponent } from './studentviewevent/studentviewevent.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErpcollegeService } from './erpcollege.service';

@NgModule({
  declarations: [
    AppComponent,
    SuperadminloginComponent,
    CollegeadminloginComponent,
    TeacherloginComponent,
    LibrarianloginComponent,
    StudentloginComponent,
    SaddcollegeComponent,
    CaaddstudentComponent,
    CaadminprofileComponent,
    CaaddteacherComponent,
    CaaddlibrarianComponent,
    CaaddtimetableComponent,
    CaaddeventComponent,
    TeacheraddassignmentComponent,
    TeacherprofileComponent,
    TeacheraddattendanceComponent,
    TeacheruploadresultsComponent,
    TeachervieweventComponent,
    LibrarianbookComponent,
    LibrarianviewprofileComponent,
    LibrarianvieweventComponent,
    StudentprofileComponent,
    StudentviewbooksComponent,
    StudentviewtimetableComponent,
    StudentviewassignmentsComponent,
    StudentviewresultsComponent,
    StudentviewattendanceComponent,
    StudentvieweventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ErpcollegeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
