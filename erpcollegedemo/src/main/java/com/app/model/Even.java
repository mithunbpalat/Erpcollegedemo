package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="even",catalog="erpcollegedemodatabase")
public class Even {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int eid;
    private String eventname;
    private String fromda;
    private String toda;
    private String venue;
    private String collegename;
	public Even() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Even(int eid, String eventname, String fromda, String toda, String venue, String collegename) {
		super();
		this.eid = eid;
		this.eventname = eventname;
		this.fromda = fromda;
		this.toda = toda;
		this.venue = venue;
		this.collegename = collegename;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getEventname() {
		return eventname;
	}
	public void setEventname(String eventname) {
		this.eventname = eventname;
	}
	public String getFromda() {
		return fromda;
	}
	public void setFromdate(String fromda) {
		this.fromda = fromda;
	}
	public String getToda() {
		return toda;
	}
	public void setToda(String toda) {
		this.toda = toda;
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
