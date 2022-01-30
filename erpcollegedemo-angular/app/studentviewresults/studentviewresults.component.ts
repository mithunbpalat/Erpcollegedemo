import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ErpcollegeService } from '../erpcollege.service';
import { Search } from '../gsearch';
import { Student } from '../gstudent';

@Component({
  selector: 'app-studentviewresults',
  templateUrl: './studentviewresults.component.html',
  styleUrls: ['./studentviewresults.component.css']
})
export class StudentviewresultsComponent implements OnInit {

  a:any;
  search: any=new Search(0);
  student: any=new Student(0,"","","","","","","","","","","","","","","","","",0);
  fileInfos?: Observable<any>;
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getStudentById(this.a);
    respo.subscribe((data)=>this.student=data);

    this.fileInfos = this.service.getFiles();
  }
  
  
}
