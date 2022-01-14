import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Assignment } from '../gassignment';
import { Search } from '../gsearch';
import { Student } from '../gstudent';

@Component({
  selector: 'app-studentviewassignments',
  templateUrl: './studentviewassignments.component.html',
  styleUrls: ['./studentviewassignments.component.css']
})
export class StudentviewassignmentsComponent implements OnInit {

  assignment:any=new Assignment(0,"","","","","","");
  assignments: any;
  a:any;
  search: any=new Search(0);
  student: any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getStudentById(this.a);
    respo.subscribe((data)=>this.student=data);

      }
  public getAssignment(b:string){
    let resp = this.service.getAssignment(b);
    resp.subscribe((data)=>this.assignments=data);

  }






  public searchById(a:number){
    let resp=this.service.getAssignmentById(a);
    resp.subscribe((data)=>this.assignment=data);
  }

}
