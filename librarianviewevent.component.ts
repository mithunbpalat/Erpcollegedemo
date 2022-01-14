import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Even } from '../gevent';
import { Librarian } from '../glibrarian';
import { Search } from '../gsearch';

@Component({
  selector: 'app-librarianviewevent',
  templateUrl: './librarianviewevent.component.html',
  styleUrls: ['./librarianviewevent.component.css']
})
export class LibrarianvieweventComponent implements OnInit {

  even:any=new Even(0,"","","","","");
  evens: any;
  a:any;
  search: any=new Search(0);
  librarian: any=new Librarian(0,"","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getLibrarianById(this.a);
    respo.subscribe((data)=>this.librarian=data);

    
  }

  public getEven(b:string){
    let resp = this.service.getEvens(b);
    resp.subscribe((data)=>this.evens=data);
  }



  public searchById(a:number){
    let resp=this.service.getEvenById(a);
    resp.subscribe((data)=>this.even=data);
  }
}
