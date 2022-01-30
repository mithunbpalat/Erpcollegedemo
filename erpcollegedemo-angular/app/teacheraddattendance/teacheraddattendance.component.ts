import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Attendance } from '../gattendance';
import { Search } from '../gsearch';
import { Teacher } from '../gteacher';

@Component({
  selector: 'app-teacheraddattendance',
  templateUrl: './teacheraddattendance.component.html',
  styleUrls: ['./teacheraddattendance.component.css']
})
export class TeacheraddattendanceComponent implements OnInit {

  attendance:any=new Attendance(0,"","","","","","","","");
  attendances: any;
  a:any;
  search: any=new Search(0);
  teacher: any=new Teacher(0,"","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getTeacherById(this.a);
    respo.subscribe((data)=>this.teacher=data);

    
  }
  public getAttendance(b: string){
    let resp = this.service.getAttendance(b);
    resp.subscribe((data)=>this.attendances=data);
  }




  public attendanceNow(){
    let resp = this.service.postAttendance(this.attendance);
    resp.subscribe((data)=>this.attendances=data);
  }
  public updateAttendanceNow(){
    let resp = this.service.updateAttendance(this.attendance);
    resp.subscribe((data)=>this.attendances=data);
  }
  public delAttendance(attid:number){
    let resp=this.service.deleteAttendance(attid);
    resp.subscribe((data)=>this.attendances=data);
  }
  public searchById(a:number){
    let resp=this.service.getAttendanceById(a);
    resp.subscribe((data)=>this.attendance=data);
  }

}
