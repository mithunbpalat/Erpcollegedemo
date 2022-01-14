import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Search } from '../gsearch';
import { Student } from '../gstudent';
import { Timetable } from '../gtimetable';

@Component({
  selector: 'app-studentviewtimetable',
  templateUrl: './studentviewtimetable.component.html',
  styleUrls: ['./studentviewtimetable.component.css']
})
export class StudentviewtimetableComponent implements OnInit {

  timetable:any=new Timetable(0,"","","","","","","","","","","");
  timetables: any;
  a:any;
  search: any=new Search(0);
  student: any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getStudentById(this.a);
    respo.subscribe((data)=>this.student=data);

   
  }
  public getTimetable(b:string){
    let resp = this.service.getTimetables(b);
    resp.subscribe((data)=>this.timetables=data);
  }




  public searchById(a:number){
    let resp=this.service.getTimetableById(a);
    resp.subscribe((data)=>this.timetable=data);
  }
}
