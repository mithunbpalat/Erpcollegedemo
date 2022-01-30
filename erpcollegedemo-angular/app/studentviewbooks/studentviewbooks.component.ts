import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Book } from '../gbook';
import { Search } from '../gsearch';
import { Student } from '../gstudent';

@Component({
  selector: 'app-studentviewbooks',
  templateUrl: './studentviewbooks.component.html',
  styleUrls: ['./studentviewbooks.component.css']
})
export class StudentviewbooksComponent implements OnInit {

  book:any=new Book(0,"","","","","","","","","");
  books: any;
  a:any;
  search: any=new Search(0);
  student: any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getStudentById(this.a);
    respo.subscribe((data)=>this.student=data);

    
  }
  getBook(b:string){
    let resp = this.service.getBooks(b);
    resp.subscribe((data)=>this.books=data);
  }




  public searchById(a:number){
    let resp=this.service.getBookById(a);
    resp.subscribe((data)=>this.book=data);
  }

}
