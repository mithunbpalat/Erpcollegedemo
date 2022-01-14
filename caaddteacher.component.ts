import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { College } from '../gcollege';
import { Search } from '../gsearch';
import { Teacher } from '../gteacher';

@Component({
  selector: 'app-caaddteacher',
  templateUrl: './caaddteacher.component.html',
  styleUrls: ['./caaddteacher.component.css']
})
export class CaaddteacherComponent implements OnInit {

  teacher:any=new Teacher(0,"","","","","","","","","",0);
  teachers: any;
  a:any;
  search: any=new Search(0);
  college: any=new College(0,"","","","","","","","","","");
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getCollegeById(this.a);
    respo.subscribe((data)=>this.college=data);

  }
  public getTeachers(b:string){
    let resp = this.service.getTeacher(b);
    resp.subscribe((data)=>this.teachers=data);
  }



  public teacherNow(){
    let resp = this.service.postTeacher(this.teacher);
    resp.subscribe((data)=>this.teachers=data);
  }
  public updateTeacherNow(){
    let resp = this.service.updateTeacher(this.teacher);
    resp.subscribe((data)=>this.teachers=data);
  }
  public delTeacher(tid:number){
    let resp=this.service.deleteTeacher(tid);
    resp.subscribe((data)=>this.teachers=data);
  }
  public searchById(a:number){
    let resp=this.service.getTeacherById(a);
    resp.subscribe((data)=>this.teacher=data);
  }

}
