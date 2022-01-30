import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Attendance } from '../gattendance';
import { Search } from '../gsearch';
import { Student } from '../gstudent';

@Component({
  selector: 'app-studentviewattendance',
  templateUrl: './studentviewattendance.component.html',
  styleUrls: ['./studentviewattendance.component.css']
})
export class StudentviewattendanceComponent implements OnInit {

  attendance:any=new Attendance(0,"","","","","","","","");
  attendances: any;
  a:any;
  search: any=new Search(0);
  student: any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getStudentById(this.a);
    respo.subscribe((data)=>this.student=data);

    
  }
  public getAttendance(b:string){
    let resp = this.service.getAttendance(b);
    resp.subscribe((data)=>this.attendances=data);
  }




  public searchById(a:number){
    let resp=this.service.getAttendanceById(a);
    resp.subscribe((data)=>this.attendance=data);
  }

}
