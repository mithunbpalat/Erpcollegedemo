import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ErpcollegeService } from '../erpcollege.service';
import { Search } from '../gsearch';
import { Teacher } from '../gteacher';

@Component({
  selector: 'app-teacheruploadresults',
  templateUrl: './teacheruploadresults.component.html',
  styleUrls: ['./teacheruploadresults.component.css']
})
export class TeacheruploadresultsComponent implements OnInit {


    selectedFiles?: FileList;
    currentFile?: File;
    progress = 0;
    message = '';
  
    fileInfos?: Observable<any>;
    a:any;
  search: any=new Search(0);
  teacher: any=new Teacher(0,"","","","","","","","","",0);
  constructor(private uploadService: ErpcollegeService, private service:ErpcollegeService, private route:ActivatedRoute) { }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>this.a=data.get('id'));

    let respo= this.service.getTeacherById(this.a);
    respo.subscribe((data)=>this.teacher=data);

    this.fileInfos = this.uploadService.getFiles();
  }
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }
  
}
