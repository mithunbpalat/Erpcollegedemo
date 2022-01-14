import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaaddeventComponent } from './caaddevent/caaddevent.component';
import { CaaddlibrarianComponent } from './caaddlibrarian/caaddlibrarian.component';
import { CaaddstudentComponent } from './caaddstudent/caaddstudent.component';
import { CaaddteacherComponent } from './caaddteacher/caaddteacher.component';
import { CaaddtimetableComponent } from './caaddtimetable/caaddtimetable.component';
import { CaadminprofileComponent } from './caadminprofile/caadminprofile.component';
import { CollegeadminloginComponent } from './collegeadminlogin/collegeadminlogin.component';
import { LibrarianbookComponent } from './librarianbook/librarianbook.component';
import { LibrarianloginComponent } from './librarianlogin/librarianlogin.component';
import { LibrarianvieweventComponent } from './librarianviewevent/librarianviewevent.component';
import { LibrarianviewprofileComponent } from './librarianviewprofile/librarianviewprofile.component';
import { SaddcollegeComponent } from './saddcollege/saddcollege.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { StudentviewassignmentsComponent } from './studentviewassignments/studentviewassignments.component';
import { StudentviewattendanceComponent } from './studentviewattendance/studentviewattendance.component';
import { StudentviewbooksComponent } from './studentviewbooks/studentviewbooks.component';
import { StudentvieweventComponent } from './studentviewevent/studentviewevent.component';
import { StudentviewresultsComponent } from './studentviewresults/studentviewresults.component';
import { StudentviewtimetableComponent } from './studentviewtimetable/studentviewtimetable.component';
import { SuperadminloginComponent } from './superadminlogin/superadminlogin.component';
import { TeacheraddassignmentComponent } from './teacheraddassignment/teacheraddassignment.component';
import { TeacheraddattendanceComponent } from './teacheraddattendance/teacheraddattendance.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { TeacherprofileComponent } from './teacherprofile/teacherprofile.component';
import { TeacheruploadresultsComponent } from './teacheruploadresults/teacheruploadresults.component';
import { TeachervieweventComponent } from './teacherviewevent/teacherviewevent.component';

const routes: Routes = [
  {path:"",redirectTo:"superadminlogin",pathMatch:"full"},
  {path:"superadminlogin",component:SuperadminloginComponent},
  {path:"collegeadminlogin",component:CollegeadminloginComponent},
  {path:"teacherlogin",component:TeacherloginComponent},
  {path:"librarianlogin",component:LibrarianloginComponent},
  {path:"studentlogin",component:StudentloginComponent},
  {path:"addcollege",component:SaddcollegeComponent},
  {path:"collegeadminprofile/:id",component:CaadminprofileComponent},
  {path:"caaddstudent/:id",component:CaaddstudentComponent},
  {path:"caaddteacher/:id",component:CaaddteacherComponent},
  {path:"caaddlibrarian/:id",component:CaaddlibrarianComponent},
  {path:"catimetable/:id",component:CaaddtimetableComponent},
  {path:"caevent/:id",component:CaaddeventComponent},
  {path:"teacherprofile/:id",component:TeacherprofileComponent},
  {path:"teacheraddassignment/:id",component:TeacheraddassignmentComponent},
  {path:"teacheraddattendance/:id",component:TeacheraddattendanceComponent},
  {path:"teacheruploadresults/:id",component:TeacheruploadresultsComponent},
  {path:"teacherviewevent/:id",component:TeachervieweventComponent},
  {path:"librarianprofile/:id",component:LibrarianviewprofileComponent},
  {path:"librarianaddbooks/:id",component:LibrarianbookComponent},
  {path:"librarianviewevent/:id",component:LibrarianvieweventComponent},
  {path:"studentprofile/:id",component:StudentprofileComponent},
  {path:"studentviewbooks/:id",component:StudentviewbooksComponent},
  {path:"studentviewtimetable/:id",component:StudentviewtimetableComponent},
  {path:"studentviewassignments/:id",component:StudentviewassignmentsComponent},
  {path:"studentviewresults/:id",component:StudentviewresultsComponent},
  {path:"studentviewattendance/:id",component:StudentviewattendanceComponent},
  {path:"studentviewevents/:id",component:StudentvieweventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
