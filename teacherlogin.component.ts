import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Search } from '../gsearch';
import { Teacher } from '../gteacher';

@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.css']
})
export class TeacherloginComponent implements OnInit {

  msg:any;
  message:any;
  id:any;
  search: any=new Search(0);
  teacher : any=new Teacher(0,"","","","","","","","","",0);
  test : any=new Teacher(0,"","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchById(tu:string,tc:string,tp:string){
    let resp=this.service.getTeacherByUsername(this.test);
    resp.subscribe((data)=>this.message=data);
    let respo = this.service.getTeacherByTeacherusername(tc,tu);
    respo.subscribe((data)=>this.teacher=data);
    this.msg="Check username or collegename or password";
    if(tu && tc && tp){
      if( this.message == "authenticated"){
        //(<HTMLInputElement>document.getElementById("demo")).disabled=false;
        //(<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
        //(<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin/User Log into your account";
        this.router.navigate(["/teacherprofile/",this.teacher.tid])      
      }
    }
  }

}
