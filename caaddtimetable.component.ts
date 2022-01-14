import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { College } from '../gcollege';
import { Search } from '../gsearch';
import { Timetable } from '../gtimetable';

@Component({
  selector: 'app-caaddtimetable',
  templateUrl: './caaddtimetable.component.html',
  styleUrls: ['./caaddtimetable.component.css']
})
export class CaaddtimetableComponent implements OnInit {

  timetable:any=new Timetable(0,"","","","","","","","","","","");
  timetables: any;
  a:any;
  search: any=new Search(0);
  college: any=new College(0,"","","","","","","","","","");
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getCollegeById(this.a);
    respo.subscribe((data)=>this.college=data);

    
  }
  public getTimetable(b:string){
    let resp = this.service.getTimetables(b);
    resp.subscribe((data)=>this.timetables=data);
  }




  public timetableNow(){
    let resp = this.service.postTimetable(this.timetable);
    resp.subscribe((data)=>this.timetables=data);
  }
  public updateTimetableNow(){
    let resp = this.service.updateTimetable(this.timetable);
    resp.subscribe((data)=>this.timetables=data);
  }
  public delTimetable(timetableid:number){
    let resp=this.service.deleteTimetable(timetableid);
    resp.subscribe((data)=>this.timetables=data);
  }
  public searchById(a:number){
    let resp=this.service.getTimetableById(a);
    resp.subscribe((data)=>this.timetable=data);
  }


}
