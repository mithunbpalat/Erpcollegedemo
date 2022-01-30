package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="timetable",catalog="erpcollegedemodatabase")
public class Timetable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int ttid;
    private String examname;
    private String course;
    private String branch;
    private String subcode;
    private String subject;
    private String dateofexam;
    private String dayofexam;
    private String fromtime;
    private String totime;
    private String venue;
    private String collegename;
	public Timetable() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Timetable(int ttid, String examname, String course, String branch, String subcode, String subject,
			String dateofexam, String dayofexam, String fromtime, String totime, String venue, String collegename) {
		super();
		this.ttid = ttid;
		this.examname = examname;
		this.course = course;
		this.branch = branch;
		this.subcode = subcode;
		this.subject = subject;
		this.dateofexam = dateofexam;
		this.dayofexam = dayofexam;
		this.fromtime = fromtime;
		this.totime = totime;
		this.venue = venue;
		this.collegename = collegename;
	}
	public int getTtid() {
		return ttid;
	}
	public void setTtid(int ttid) {
		this.ttid = ttid;
	}
	public String getExamname() {
		return examname;
	}
	public void setExamname(String examname) {
		this.examname = examname;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getSubcode() {
		return subcode;
	}
	public void setSubcode(String subcode) {
		this.subcode = subcode;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getDateofexam() {
		return dateofexam;
	}
	public void setDateofexam(String dateofexam) {
		this.dateofexam = dateofexam;
	}
	public String getDayofexam() {
		return dayofexam;
	}
	public void setDayofexam(String dayofexam) {
		this.dayofexam = dayofexam;
	}
	public String getFromtime() {
		return fromtime;
	}
	public void setFromtime(String fromtime) {
		this.fromtime = fromtime;
	}
	public String getTotime() {
		return totime;
	}
	public void setTotime(String totime) {
		this.totime = totime;
	}
	public String getVenue() {
		return venue;
	}
	public void setVenue(String venue) {
		this.venue = venue;
	}
	public String getCollegename() {
		return collegename;
	}
	public void setCollegename(String collegename) {
		this.collegename = collegename;
	}
    
}
