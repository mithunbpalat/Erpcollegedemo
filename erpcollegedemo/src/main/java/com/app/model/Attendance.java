package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="attendance",catalog="erpcollegedemodatabase")
public class Attendance {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int attid;
    private String studentname;
    private String course;
    private String stdyear;
    private String admno;
    private String date;
    private String presence;
    private String reason;
    private String collegename;
	public Attendance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Attendance(int attid, String studentname, String course, String stdyear, String admno, String date,
			String presence, String reason, String collegename) {
		super();
		this.attid = attid;
		this.studentname = studentname;
		this.course = course;
		this.stdyear = stdyear;
		this.admno = admno;
		this.date = date;
		this.presence = presence;
		this.reason = reason;
		this.collegename = collegename;
	}
	public int getAttid() {
		return attid;
	}
	public void setAttid(int attid) {
		this.attid = attid;
	}
	public String getStudentname() {
		return studentname;
	}
	public void setStudentname(String studentname) {
		this.studentname = studentname;
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
	public String getAdmno() {
		return admno;
	}
	public void setAdmno(String admno) {
		this.admno = admno;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getPresence() {
		return presence;
	}
	public void setPresence(String presence) {
		this.presence = presence;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getCollegename() {
		return collegename;
	}
	public void setCollegename(String collegename) {
		this.collegename = collegename;
	}
    
	
}
