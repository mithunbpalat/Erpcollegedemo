package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="librarian",catalog="erpcollegedemodatabase")
public class Librarian {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int lid;
    private String name;
    private String address;
    private String email;
    private String collegename;
    private String phone;
    private String salary;
    private String doj;
    private String librarianusername;
    private String librarianpassword;
    private int status;
	public Librarian() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Librarian(int lid, String name, String address, String email, String collegename, String phone,
			String salary, String doj, String librarianusername, String librarianpassword, int status) {
		super();
		this.lid = lid;
		this.name = name;
		this.address = address;
		this.email = email;
		this.collegename = collegename;
		this.phone = phone;
		this.salary = salary;
		this.doj = doj;
		this.librarianusername = librarianusername;
		this.librarianpassword = librarianpassword;
		this.status = status;
	}
	public int getLid() {
		return lid;
	}
	public void setLid(int lid) {
		this.lid = lid;
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
	public String getLibrarianusername() {
		return librarianusername;
	}
	public void setLibrarianusername(String librarianusername) {
		this.librarianusername = librarianusername;
	}
	public String getLibrarianpassword() {
		return librarianpassword;
	}
	public void setLibrarianpassword(String librarianpassword) {
		this.librarianpassword = librarianpassword;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
    
}
