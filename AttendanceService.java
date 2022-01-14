package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AttendanceRepository;
import com.app.model.Attendance;

@Service
public class AttendanceService {
	@Autowired
	private AttendanceRepository attendanceRepo;
	public Attendance saveAttendance(Attendance attendance) {
		return attendanceRepo.save(attendance);
	}
	public Attendance updateAttendance(Attendance attendance) {
		return attendanceRepo.save(attendance);
	}
	public List<Attendance> getAllAttendances(String collegename) {
		return (List<Attendance>) attendanceRepo.findAllByCollegename(collegename);
	}
	public void deleteAttendance(int attid) {
		attendanceRepo.deleteById(attid);
	}
	public Attendance findAttendanceByAttid(int attid) {
		return attendanceRepo.findById(attid).get();
	}
}