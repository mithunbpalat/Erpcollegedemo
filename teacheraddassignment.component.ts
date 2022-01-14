import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Assignment } from '../gassignment';
import { Search } from '../gsearch';
import { Teacher } from '../gteacher';

@Component({
  selector: 'app-teacheraddassignment',
  templateUrl: './teacheraddassignment.component.html',
  styleUrls: ['./teacheraddassignment.component.css']
})
export class TeacheraddassignmentComponent implements OnInit {

  assignment:any=new Assignment(0,"","","","","","");
  assignments: any;
  a:any;
  search: any=new Search(0);
  teacher: any=new Teacher(0,"","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getTeacherById(this.a);
    respo.subscribe((data)=>this.teacher=data);

   
  }
  public getAssignments(b:string){
    let resp = this.service.getAssignment(b);
    resp.subscribe((data)=>this.assignments=data);
  }




  public assignmentNow(){
    let resp = this.service.postAssignment(this.assignment);
    resp.subscribe((data)=>this.assignments=data);
  }
  public updateAssignmentNow(){
    let resp = this.service.updateAssignment(this.assignment);
    resp.subscribe((data)=>this.assignments=data);
  }
  public delAssignment(aid:number){
    let resp=this.service.deleteAssignment(aid);
    resp.subscribe((data)=>this.assignments=data);
  }
  public searchById(a:number){
    let resp=this.service.getAssignmentById(a);
    resp.subscribe((data)=>this.assignment=data);
  }
}
