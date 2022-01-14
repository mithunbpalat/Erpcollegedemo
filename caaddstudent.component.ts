import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { College } from '../gcollege';
import { Search } from '../gsearch';
import { Student } from '../gstudent';

@Component({
  selector: 'app-caaddstudent',
  templateUrl: './caaddstudent.component.html',
  styleUrls: ['./caaddstudent.component.css']
})
export class CaaddstudentComponent implements OnInit {

  student:any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  students: any;
  a:any;
  b:any;
  search: any=new Search(0);
  college: any=new College(0,"","","","","","","","","","");
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getCollegeById(this.a);
    respo.subscribe((data)=>this.college=data);

  }
  public getStudents(b: string){
    let resp = this.service.getStudents(b);
    resp.subscribe((data)=>this.students=data);
  } 


  public studentNow(){
    let resp = this.service.postStudent(this.student);
    resp.subscribe((data)=>this.students=data);
  }
  public updateStudentNow(){
    let resp = this.service.updateStudent(this.student);
    resp.subscribe((data)=>this.students=data);
  }
  public delStudent(a:number){
    let resp=this.service.deleteStudent(a);
    resp.subscribe((data)=>this.students=data);
  }
  public searchById(a:number){
    let resp=this.service.getStudentById(a);
    resp.subscribe((data)=>this.student=data);
  }
}
