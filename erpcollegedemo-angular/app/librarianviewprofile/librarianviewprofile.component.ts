import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Librarian } from '../glibrarian';
import { Search } from '../gsearch';

@Component({
  selector: 'app-librarianviewprofile',
  templateUrl: './librarianviewprofile.component.html',
  styleUrls: ['./librarianviewprofile.component.css']
})
export class LibrarianviewprofileComponent implements OnInit {

  a:any;
  search: any=new Search(0);
  librarian: any=new Librarian(0,"","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getLibrarianById(this.a);
    respo.subscribe((data)=>this.librarian=data);
  }


}
