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

import com.app.model.Attendance;
import com.app.service.AttendanceService;

@RestController
@CrossOrigin("*")
public class AttendanceController {
	@Autowired
	private AttendanceService attendanceServ;
	
	@PostMapping(value="postattendance")
	public List<Attendance> saveAttendance(@RequestBody Attendance attendance){
		System.out.println("Attendance works");
		String collegename = attendance.getCollegename();
		attendanceServ.saveAttendance(attendance);
		return attendanceServ.getAllAttendances(collegename);
	}
	@PutMapping(value="updateattendance")
	public List<Attendance> updateAttendance(@RequestBody Attendance attendance){
		System.out.println("Attendance update works");
		String collegename = attendance.getCollegename();
		attendanceServ.updateAttendance(attendance);
		return attendanceServ.getAllAttendances(collegename);
	}
	@GetMapping(value="getallattendances")
	public List<Attendance> getAllAttendance(@RequestParam String collegename){
		return attendanceServ.getAllAttendances(collegename);
	}
	@DeleteMapping(value="deleteattendancebyid")
	public List<Attendance> deleteAttendance(@RequestParam int attid){
		Attendance att = attendanceServ.findAttendanceByAttid(attid);
		String collegename = att.getCollegename();
		attendanceServ.deleteAttendance(attid);
		return attendanceServ.getAllAttendances(collegename);
	}
	@GetMapping(value="getattendancebyid")
	public Attendance getAttendanceById(@RequestParam int attid){
		return attendanceServ.findAttendanceByAttid(attid);
	}
}
