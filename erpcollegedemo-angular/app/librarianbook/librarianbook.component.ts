import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Book } from '../gbook';
import { Librarian } from '../glibrarian';
import { Search } from '../gsearch';

@Component({
  selector: 'app-librarianbook',
  templateUrl: './librarianbook.component.html',
  styleUrls: ['./librarianbook.component.css']
})
export class LibrarianbookComponent implements OnInit {

  book:any=new Book(0,"","","","","","","","","");
  books: any;
  a:any;
  search: any=new Search(0);
  librarian: any=new Librarian(0,"","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getLibrarianById(this.a);
    respo.subscribe((data)=>this.librarian=data);

    
  }

  public getBook(b:string){
    let resp = this.service.getBooks(b);
    resp.subscribe((data)=>this.books=data);
  }



  public bookNow(){
    let resp = this.service.postBook(this.book);
    resp.subscribe((data)=>this.books=data);
  }
  public updateBookNow(){
    let resp = this.service.updateBook(this.book);
    resp.subscribe((data)=>this.books=data);
  }
  public delBook(bid:number){
    let resp=this.service.deleteBook(bid);
    resp.subscribe((data)=>this.books=data);
  }
  public searchById(a:number){
    let resp=this.service.getBookById(a);
    resp.subscribe((data)=>this.book=data);
  }

}
