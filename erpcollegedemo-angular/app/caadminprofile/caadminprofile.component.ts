import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Book } from '../gbook';
import { College } from '../gcollege';
import { Search } from '../gsearch';

@Component({
  selector: 'app-caadminprofile',
  templateUrl: './caadminprofile.component.html',
  styleUrls: ['./caadminprofile.component.css']
})
export class CaadminprofileComponent implements OnInit {

  book:any=new Book(0,"","","","","","","","","");
  books: any;
  a:any;
  search: any=new Search(0);
  college: any=new College(0,"","","","","","","","","","");
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getCollegeById(this.a);
    respo.subscribe((data)=>this.college=data);

    
  }
  public getBook(b:string){
    let resp = this.service.getBooks(b);
    resp.subscribe((data)=>this.books=data);
  }

}
