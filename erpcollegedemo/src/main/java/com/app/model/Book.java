package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="book",catalog="erpcollegedemodatabase")
public class Book {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int bid;
    private String bookname;
    private String requestbook;
    private String bookissuedetails;
    private String issuedate;
    private String studentname;
    private String returnbook;
    private String returndate;
    private String bookstatus;
    private String collegename;
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Book(int bid, String bookname, String requestbook, String bookissuedetails, String issuedate,
			String studentname, String returnbook, String returndate, String bookstatus, String collegename) {
		super();
		this.bid = bid;
		this.bookname = bookname;
		this.requestbook = requestbook;
		this.bookissuedetails = bookissuedetails;
		this.issuedate = issuedate;
		this.studentname = studentname;
		this.returnbook = returnbook;
		this.returndate = returndate;
		this.bookstatus = bookstatus;
		this.collegename = collegename;
	}
	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
	}
	public String getBookname() {
		return bookname;
	}
	public void setBookname(String bookname) {
		this.bookname = bookname;
	}
	public String getRequestbook() {
		return requestbook;
	}
	public void setRequestbook(String requestbook) {
		this.requestbook = requestbook;
	}
	public String getBookissuedetails() {
		return bookissuedetails;
	}
	public void setBookissuedetails(String bookissuedetails) {
		this.bookissuedetails = bookissuedetails;
	}
	public String getIssuedate() {
		return issuedate;
	}
	public void setIssuedate(String issuedate) {
		this.issuedate = issuedate;
	}
	public String getStudentname() {
		return studentname;
	}
	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}
	public String getReturnbook() {
		return returnbook;
	}
	public void setReturnbook(String returnbook) {
		this.returnbook = returnbook;
	}
	public String getReturndate() {
		return returndate;
	}
	public void setReturndate(String returndate) {
		this.returndate = returndate;
	}
	public String getBookstatus() {
		return bookstatus;
	}
	public void setBookstatus(String bookstatus) {
		this.bookstatus = bookstatus;
	}
	public String getCollegename() {
		return collegename;
	}
	public void setCollegename(String collegename) {
		this.collegename = collegename;
	}
    
	
}
