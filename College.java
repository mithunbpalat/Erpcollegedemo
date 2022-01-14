package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="college",catalog="erpcollegedemodatabase")
public class College {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int cid;
    private String collegename;
    private String adminusername;
    private String adminpassword;
    private String collegeaddress;
    private String courses;
    private String email;
    private String phonenumber;
    private String addeddate;
    private String ownership;
    private String status;
	public College() {
		super();
		// TODO Auto-generated constructor stub
	}
	public College(int cid, String collegename, String adminusername, String adminpassword, String collegeaddress,
			String courses, String email, String phonenumber, String addeddate, String ownership, String status) {
		super();
		this.cid = cid;
		this.collegename = collegename;
		this.adminusername = adminusername;
		this.adminpassword = adminpassword;
		this.collegeaddress = collegeaddress;
		this.courses = courses;
		this.email = email;
		this.phonenumber = phonenumber;
		this.addeddate = addeddate;
		this.ownership = ownership;
		this.status = status;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCollegename() {
		return collegename;
	}
	public void setCollegename(String collegename) {
		this.collegename = collegename;
	}
	public String getAdminusername() {
		return adminusername;
	}
	public void setAdminusername(String adminusername) {
		this.adminusername = adminusername;
	}
	public String getAdminpassword() {
		return adminpassword;
	}
	public void setAdminpassword(String adminpassword) {
		this.adminpassword = adminpassword;
	}
	public String getCollegeaddress() {
		return collegeaddress;
	}
	public void setCollegeaddress(String collegeaddress) {
		this.collegeaddress = collegeaddress;
	}
	public String getCourses() {
		return courses;
	}
	public void setCourses(String courses) {
		this.courses = courses;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public String getAddeddate() {
		return addeddate;
	}
	public void setAddeddate(String addeddate) {
		this.addeddate = addeddate;
	}
	public String getOwnership() {
		return ownership;
	}
	public void setOwnership(String ownership) {
		this.ownership = ownership;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    
    
}
