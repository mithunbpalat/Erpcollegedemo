import { Component, OnInit } from '@angular/core';
import { ErpcollegeService } from '../erpcollege.service';
import { College } from '../gcollege';
import { Search } from '../gsearch';

@Component({
  selector: 'app-saddcollege',
  templateUrl: './saddcollege.component.html',
  styleUrls: ['./saddcollege.component.css']
})
export class SaddcollegeComponent implements OnInit {

  college:any=new College(0,"","","","","","","","","","");
  colleges: any;
  a:any;
  search: any=new Search(0);
  constructor(private service: ErpcollegeService) { }

  ngOnInit(): void {
    let resp = this.service.getColleges();
    resp.subscribe((data)=>this.colleges=data);
  }

  public collegeNow(){
    let resp = this.service.postCollege(this.college);
    resp.subscribe((data)=>this.colleges=data);
  }
  public updateCollegeNow(){
    let resp = this.service.updateCollege(this.college);
    resp.subscribe((data)=>this.colleges=data);
  }
  public delCollege(cid:number){
    let resp=this.service.deleteCollege(cid);
    resp.subscribe((data)=>this.colleges=data);
  }
  public searchById(a:number){
    let resp=this.service.getCollegeById(a);
    resp.subscribe((data)=>this.college=data);
  }

}
