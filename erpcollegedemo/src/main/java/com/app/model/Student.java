package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student",catalog="erpcollegedemodatabase")
public class Student {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int admno;
    private String collegename;
    private String name;
    private String address;
    private String fathername;
    private String mothername;
    private String course;
    private String stdyear;
    private String dateadmitted;
    private String courseduration;
    private String totalfees;
    private String feespaid;
    private String balancefees;
    private String dateofcoursecompletion;
    private String phone;
    private String studusername;
    private String studpassword;
    private String email;
    private int status;
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(int admno, String collegename, String name, String address, String fathername, String mothername,
			String course, String stdyear, String dateadmitted, String courseduration, String totalfees,
			String feespaid, String balancefees, String dateofcoursecompletion, String phone, String studusername,
			String studpassword, String email, int status) {
		super();
		this.admno = admno;
		this.collegename = collegename;
		this.name = name;
		this.address = address;
		this.fathername = fathername;
		this.mothername = mothername;
		this.course = course;
		this.stdyear = stdyear;
		this.dateadmitted = dateadmitted;
		this.courseduration = courseduration;
		this.totalfees = totalfees;
		this.feespaid = feespaid;
		this.balancefees = balancefees;
		this.dateofcoursecompletion = dateofcoursecompletion;
		this.phone = phone;
		this.studusername = studusername;
		this.studpassword = studpassword;
		this.email = email;
		this.status = status;
	}
	public int getAdmno() {
		return admno;
	}
	public void setAdmno(int admno) {
		this.admno = admno;
	}
	public String getCollegename() {
		return collegename;
	}
	public void setCollegename(String collegename) {
		this.collegename = collegename;
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
	public String getFathername() {
		return fathername;
	}
	public void setFathername(String fathername) {
		this.fathername = fathername;
	}
	public String getMothername() {
		return mothername;
	}
	public void setMothername(String mothername) {
		this.mothername = mothername;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public String getStdyear() {
		return stdyear;
	}
	public void setStdyear(String stdyear) {
		this.stdyear = stdyear;
	}
	public String getDateadmitted() {
		return dateadmitted;
	}
	public void setDateadmitted(String dateadmitted) {
		this.dateadmitted = dateadmitted;
	}
	public String getCourseduration() {
		return courseduration;
	}
	public void setCourseduration(String courseduration) {
		this.courseduration = courseduration;
	}
	public String getTotalfees() {
		return totalfees;
	}
	public void setTotalfees(String totalfees) {
		this.totalfees = totalfees;
	}
	public String getFeespaid() {
		return feespaid;
	}
	public void setFeespaid(String feespaid) {
		this.feespaid = feespaid;
	}
	public String getBalancefees() {
		return balancefees;
	}
	public void setBalancefees(String balancefees) {
		this.balancefees = balancefees;
	}
	public String getDateofcoursecompletion() {
		return dateofcoursecompletion;
	}
	public void setDateofcoursecompletion(String dateofcoursecompletion) {
		this.dateofcoursecompletion = dateofcoursecompletion;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getStudusername() {
		return studusername;
	}
	public void setStudusername(String studusername) {
		this.studusername = studusername;
	}
	public String getStudpassword() {
		return studpassword;
	}
	public void setStudpassword(String studpassword) {
		this.studpassword = studpassword;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
    
}
