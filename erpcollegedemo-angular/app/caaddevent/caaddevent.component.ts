import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErpcollegeService } from '../erpcollege.service';
import { College } from '../gcollege';
import { Even } from '../gevent';
import { Search } from '../gsearch';

@Component({
  selector: 'app-caaddevent',
  templateUrl: './caaddevent.component.html',
  styleUrls: ['./caaddevent.component.css']
})
export class CaaddeventComponent implements OnInit {

  even:any=new Even(0,"","","","","");
  evens: any;
  a:any;
  search: any=new Search(0);
  college: any=new College(0,"","","","","","","","","","");
  constructor(private service: ErpcollegeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getCollegeById(this.a);
    respo.subscribe((data)=>this.college=data);

    
  }
  public getEven(b:string){
    let resp = this.service.getEvens(b);
    resp.subscribe((data)=>this.evens=data);
  }



  public evenNow(){
    let resp = this.service.postEven(this.even);
    resp.subscribe((data)=>this.evens=data);
  }
  public updateEvenNow(){
    let resp = this.service.updateEven(this.even);
    resp.subscribe((data)=>this.evens=data);
  }
  public delEven(eid:number){
    let resp=this.service.deleteEven(eid);
    resp.subscribe((data)=>this.evens=data);
  }
  public searchById(a:number){
    let resp=this.service.getEvenById(a);
    resp.subscribe((data)=>this.even=data);
  }
}
