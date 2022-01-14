import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from './gassignment';
import { Attendance } from './gattendance';
import { Book } from './gbook';
import { College } from './gcollege';
import { Even } from './gevent';
import { Librarian } from './glibrarian';
import { Student } from './gstudent';
import { Teacher } from './gteacher';
import { Timetable } from './gtimetable';

@Injectable({
  providedIn: 'root'
})
export class ErpcollegeService {

  private baseUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) { }




  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      headers,
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get(`${this.baseUrl}/files`,{headers});
  }




  public postEven(even: Even){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/posteven",even,{headers,responseType:'text' as 'json'});
  }
  public updateEven(even: Even){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateeven",even,{headers,responseType:'text' as 'json'});
  }
  public getEvens(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallevens?collegename="+a,{headers});
  }
  public getEvenById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getevenbyid?eid="+a,{headers});
  }
  public deleteEven(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteevenbyid?eid="+a,{headers});
  }





  public postCollege(college: College){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postcollege",college,{headers,responseType:'text' as 'json'});
  }
  public updateCollege(college: College){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatecollege",college,{headers,responseType:'text' as 'json'});
  }
  public getColleges(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallcolleges",{headers});
  }
  public getCollegeById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getcollegebyid?cid="+a,{headers});
  }
  public getCollegeByAdminusername(a:string,b:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getcollegebyadminusername?collegename="+a+"&adminusername="+b,{headers});
  }
  public deleteCollege(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletecollegebyid?cid="+a,{headers});
  }
  public getCollegeadminByUsername(college: College){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/getcollegeadminbyusername",college,{headers,responseType:'text' as 'json'});
  }
  



  public postStudent(student: Student){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/poststudent",student,{headers,responseType:'text' as 'json'});
  }
  public updateStudent(student: Student){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatestudent",student,{headers,responseType:'text' as 'json'});
  }
  public getStudents(a: string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallstudents?collegename="+a,{headers});
  }
  public getStudentByStudusername(a:string,b:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getstudentbystudusername?collegename="+a+"&studusername="+b,{headers});
  }
  public getStudentById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getstudentbyid?admno="+a,{headers});
  }
  public deleteStudent(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletestudentbyid?admno="+a,{headers});
  }
  public getStudentByUsername(student: Student){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/getstudentbyusername",student,{headers,responseType:'text' as 'json'});
  }




   
  public postTeacher(teacher: Teacher){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postteacher",teacher,{headers,responseType:'text' as 'json'});
  }
  public updateTeacher(teacher: Teacher){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateteacher",teacher,{headers,responseType:'text' as 'json'});
  }
  public getTeacher(a: any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallteachers?collegename="+a,{headers});
  }
  public getTeacherById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getteacherbyid?tid="+a,{headers});
  }
  public getTeacherByTeacherusername(a:string,b:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getteacherbyteacherusername?collegename="+a+"&teacherusername="+b,{headers});
  }
  public deleteTeacher(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteteacherbyid?tid="+a,{headers});
  }
  public getTeacherByUsername(teacher: Teacher){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/getteacherbyusername",teacher,{headers,responseType:'text' as 'json'});
  }






  public postLibrarian(librarian: Librarian){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postlibrarian",librarian,{headers,responseType:'text' as 'json'});
  }
  public updateLibrarian(librarian: Librarian){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatelibrarian",librarian,{headers,responseType:'text' as 'json'});
  }
  public getLibrarians(a: any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getalllibrarians?collegename="+a,{headers});
  }
  public getLibrarianById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getlibrarianbyid?lid="+a,{headers});
  }
  public getLibrarianByLibrarianusername(a:string,b:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getlibrarianbylibrarianusername?collegename="+a+"&librarianusername="+b,{headers});
  }
  public deleteLibrarian(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletelibrarianbyid?lid="+a,{headers});
  }
  public getLibrarianByUsername(librarian: Librarian){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/getlibrarianbyusername",librarian,{headers,responseType:'text' as 'json'});
  }





  public postTimetable(timetable: Timetable){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/posttimetable",timetable,{headers,responseType:'text' as 'json'});
  }
  public updateTimetable(timetable: Timetable){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatetimetable",timetable,{headers,responseType:'text' as 'json'});
  }
  public getTimetables(a: any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getalltimetables?collegename="+a,{headers});
  }
  public getTimetableById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/gettimetablebyid?ttid="+a,{headers});
  }
  public deleteTimetable(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletetimetablebyid?ttid="+a,{headers});
  }



  public postAssignment(assignment: Assignment){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postassignment",assignment,{headers,responseType:'text' as 'json'});
  }
  public updateAssignment(assignment: Assignment){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateassignment",assignment,{headers,responseType:'text' as 'json'});
  }
  public getAssignment(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallassignments?collegename="+a,{headers});
  }
  public getAssignmentById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getassignmentbyid?aid="+a,{headers});
  }
  public deleteAssignment(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteassignmentbyid?aid="+a,{headers});
  }





  public postAttendance(attendance: Attendance){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postattendance",attendance,{headers,responseType:'text' as 'json'});
  }
  public updateAttendance(attendance: Attendance){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updateattendance",attendance,{headers,responseType:'text' as 'json'});
  }
  public getAttendance(a: any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallattendances?collegename="+a,{headers});
  }
  public getAttendanceById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getattendancebyid?attid="+a,{headers});
  }
  public deleteAttendance(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deleteattendancebyid?attid="+a,{headers});
  }



  public postBook(book: Book){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.post("http://localhost:8083/postbook",book,{headers,responseType:'text' as 'json'});
  }
  public updateBook(book: Book){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.put("http://localhost:8083/updatebook",book,{headers,responseType:'text' as 'json'});
  }
  public getBooks(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getallbooks?collegename="+a,{headers});
  }
  public getBookById(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getbookbyid?bid="+a,{headers});
  }
  public deleteBook(a:number){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.delete("http://localhost:8083/deletebookbyid?bid="+a,{headers});
  }









  public getAdminByUsername(a:string){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getadminbyusername?username="+a,{headers});
  }
  public login(username:string,password:string){
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/",{headers,responseType:'text' as 'json'});
  }
  public getUsers(){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getUsers",{headers});
  }




  public getGlcustomerByDate(a:any){
    let username="javatechie";
    let password="jt143";
    const headers = new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)});
    return this.http.get("http://localhost:8083/getglcustomerbydate?date="+a,{headers});
  }

  
}
