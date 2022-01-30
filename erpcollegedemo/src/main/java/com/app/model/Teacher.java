package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="teacher",catalog="erpcollegedemodatabase")
public class Teacher {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int tid;
    private String name;
    private String address;
    private String email;
    private String collegename;
    private String phone;
    private String salary;
    private String doj;
    private String teacherusername;
    private String teacherpassword;
    private int status;
	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Teacher(int tid, String name, String address, String email, String collegename, String phone, String salary,
			String doj, String teacherusername, String teacherpassword, int status) {
		super();
		this.tid = tid;
		this.name = name;
		this.address = address;
		this.email = email;
		this.collegename = collegename;
		this.phone = phone;
		this.salary = salary;
		this.doj = doj;
		this.teacherusername = teacherusername;
		this.teacherpassword = teacherpassword;
		this.status = status;
	}
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCollegename() {
		return collegename;
	}
	public void setCollegename(String collegename) {
		this.collegename = collegename;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getDoj() {
		return doj;
	}
	public void setDoj(String doj) {
		this.doj = doj;
	}
	public String getTeacherusername() {
		return teacherusername;
	}
	public void setTeacherusername(String teacherusername) {
		this.teacherusername = teacherusername;
	}
	public String getTeacherpassword() {
		return teacherpassword;
	}
	public void setTeacherpassword(String teacherpassword) {
		this.teacherpassword = teacherpassword;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
    
}
