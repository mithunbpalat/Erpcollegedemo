import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Librarian } from '../glibrarian';
import { Search } from '../gsearch';

@Component({
  selector: 'app-librarianlogin',
  templateUrl: './librarianlogin.component.html',
  styleUrls: ['./librarianlogin.component.css']
})
export class LibrarianloginComponent implements OnInit {

  msg:any;
  message:any;
  search: any=new Search(0);
  librarian : any=new Librarian(0,"","","","","","","","","",0);
  test: any=new Librarian(0,"","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchById(tu:string,tc:string,tp:string){
    let resp=this.service.getLibrarianByUsername(this.test);
    resp.subscribe((data)=>this.message=data);
    let respo = this.service.getLibrarianByLibrarianusername(tc,tu);
    respo.subscribe((data)=>this.librarian=data);
    this.msg="Check username or collegename or password";
    if(tu && tc && tp){
      if( this.message == "authenticated"){
        //(<HTMLInputElement>document.getElementById("demo")).disabled=false;
        //(<HTMLInputElement>document.getElementById("demo")).innerText="LOGIN";
        //(<HTMLInputElement>document.getElementById("demo1")).innerText= "Hello Admin/User Log into your account";
        this.router.navigate(["/librarianprofile/",this.librarian.lid])
      }
    }
  }

}
