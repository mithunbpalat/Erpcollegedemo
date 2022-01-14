package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="assignment",catalog="erpcollegedemodatabase")
public class Assignment {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int aid;
    private String assignmentname;
    private String givendate;
    private String submitdate;
    private String faculty;
    private String collegename;
    private String marks;
	public Assignment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Assignment(int aid, String assignmentname, String givendate, String submitdate, String faculty,
			String collegename, String marks) {
		super();
		this.aid = aid;
		this.assignmentname = assignmentname;
		this.givendate = givendate;
		this.submitdate = submitdate;
		this.faculty = faculty;
		this.collegename = collegename;
		this.marks = marks;
	}
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getAssignmentname() {
		return assignmentname;
	}
	public void setAssignmentname(String assignmentname) {
		this.assignmentname = assignmentname;
	}
	public String getGivendate() {
		return givendate;
	}
	public void setGivendate(String givendate) {
		this.givendate = givendate;
	}
	public String getSubmitdate() {
		return submitdate;
	}
	public void setSubmitdate(String submitdate) {
		this.submitdate = submitdate;
	}
	public String getFaculty() {
		return faculty;
	}
	public void setFaculty(String faculty) {
		this.faculty = faculty;
	}
	public String getCollegename() {
		return collegename;
	}
	public void setCollegename(String collegename) {
		this.collegename = collegename;
	}
	public String getMarks() {
		return marks;
	}
	public void setMarks(String marks) {
		this.marks = marks;
	}
    
}
