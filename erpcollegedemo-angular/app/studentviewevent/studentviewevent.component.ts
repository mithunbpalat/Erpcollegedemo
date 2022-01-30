import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { Even } from '../gevent';
import { Search } from '../gsearch';
import { Student } from '../gstudent';

@Component({
  selector: 'app-studentviewevent',
  templateUrl: './studentviewevent.component.html',
  styleUrls: ['./studentviewevent.component.css']
})
export class StudentvieweventComponent implements OnInit {

  even:any=new Even(0,"","","","","");
  evens: any;
  a:any;
  search: any=new Search(0);
  student: any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getStudentById(this.a);
    respo.subscribe((data)=>this.student=data);

    
  }
  getEven(b:string){
    let resp = this.service.getEvens(b);
    resp.subscribe((data)=>this.evens=data);
  }




  public searchById(a:number){
    let resp=this.service.getEvenById(a);
    resp.subscribe((data)=>this.even=data);
  }

}
