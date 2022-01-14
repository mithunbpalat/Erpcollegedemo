import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { College } from '../gcollege';
import { Search } from '../gsearch';

@Component({
  selector: 'app-collegeadminlogin',
  templateUrl: './collegeadminlogin.component.html',
  styleUrls: ['./collegeadminlogin.component.css']
})
export class CollegeadminloginComponent implements OnInit {

  msg:any;
  message:any;
  id:any;
  search: any=new Search(0);
  college: any=new College(0,"","","","","","","","","","");
  test: any=new College(0,"","","","","","","","","","");
  constructor(private service: ErpcollegeService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchById(tu:string,tc:string,tp:string){
    let resp=this.service.getCollegeadminByUsername(this.test);
    resp.subscribe((data)=>this.message=data);
    let respo = this.service.getCollegeByAdminusername(tc,tu);
    respo.subscribe((data)=>this.college=data);
    this.msg="Check username or collegename or password";
    if(tu && tc && tp){
      if( this.message == "authenticated"){
        //(<HTMLInputElement>document.getElementById("demo")).disabled=false;
        //(<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
        //(<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin/User Log into your account";
        this.router.navigate(["/collegeadminprofile/",this.college.cid])      
      }
    }
  }
}
