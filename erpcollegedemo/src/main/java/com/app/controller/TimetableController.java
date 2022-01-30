package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Timetable;
import com.app.service.TimetableService;

@RestController
@CrossOrigin("*")
public class TimetableController {
	@Autowired
	private TimetableService timetableServ;
	
	@PostMapping(value="posttimetable")
	public List<Timetable> saveTimetable(@RequestBody Timetable timetable){
		System.out.println("Timetable works");
		String collegename = timetable.getCollegename();
		timetableServ.saveTimetable(timetable);
		return timetableServ.getAllTimetables(collegename);
	}
	@PutMapping(value="updatetimetable")
	public List<Timetable> updateTimetable(@RequestBody Timetable timetable){
		System.out.println("Timetable update works");
		String collegename = timetable.getCollegename();
		timetableServ.updateTimetable(timetable);
		return timetableServ.getAllTimetables(collegename);
	}
	@GetMapping(value="getalltimetables")
	public List<Timetable> getAllTimetable(@RequestParam String collegename){
		return timetableServ.getAllTimetables(collegename);
	}
	@DeleteMapping(value="deletetimetablebyid")
	public List<Timetable> deleteTimetable(@RequestParam int timetableid){
		Timetable timet = timetableServ.findTimetableByTimetableid(timetableid);
		String collegename = timet.getCollegename();
		timetableServ.deleteTimetable(timetableid);
		return timetableServ.getAllTimetables(collegename);
	}
	@GetMapping(value="gettimetablebyid")
	public Timetable getTimetableById(@RequestParam int ttid){
		return timetableServ.findTimetableByTimetableid(ttid);
	}
}
