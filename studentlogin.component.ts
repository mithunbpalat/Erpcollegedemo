import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Search } from '../gsearch';
import { Student } from '../gstudent';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  msg:any;
  message:any;
  id:any;
  search: any=new Search(0);
  student : any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  test : any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchById(tu:string,tc:string,tp:string){
    let resp=this.service.getStudentByUsername(this.test);
    resp.subscribe((data)=>this.message=data);
    let respo = this.service.getStudentByStudusername(tc,tu);
    respo.subscribe((data)=>this.student=data);
    this.msg="Check username or collegename or password";
    if(tu && tc && tp){
      if( this.message == "authenticated"){
        //(<HTMLInputElement>document.getElementById("demo")).disabled=false;
        //(<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
        //(<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin/User Log into your account";
        this.router.navigate(["/studentprofile/",this.student.admno])      
      }
    }
  }

}
