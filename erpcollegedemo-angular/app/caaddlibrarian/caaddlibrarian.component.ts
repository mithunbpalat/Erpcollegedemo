import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { College } from '../gcollege';
import { Librarian } from '../glibrarian';
import { Search } from '../gsearch';

@Component({
  selector: 'app-caaddlibrarian',
  templateUrl: './caaddlibrarian.component.html',
  styleUrls: ['./caaddlibrarian.component.css']
})
export class CaaddlibrarianComponent implements OnInit {

  librarian:any=new Librarian(0,"","","","","","","","","",0);
  librarians: any;
  a:any;
  search: any=new Search(0);
  college: any=new College(0,"","","","","","","","","","");
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getCollegeById(this.a);
    respo.subscribe((data)=>this.college=data);

    
  }
  public getLibrarians(b: string){
    let resp = this.service.getLibrarians(b);
    resp.subscribe((data)=>this.librarians=data);
  }




  public librarianNow(){
    let resp = this.service.postLibrarian(this.librarian);
    resp.subscribe((data)=>this.librarians=data);
  }
  public updateLibrarianNow(){
    let resp = this.service.updateLibrarian(this.librarian);
    resp.subscribe((data)=>this.librarians=data);
  }
  public delLibrarian(lid:number){
    let resp=this.service.deleteLibrarian(lid);
    resp.subscribe((data)=>this.librarians=data);
  }
  public searchById(a:number){
    let resp=this.service.getLibrarianById(a);
    resp.subscribe((data)=>this.librarian=data);
  }

}
