package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.TimetableRepository;
import com.app.model.Timetable;

@Service
public class TimetableService {
	@Autowired
	private TimetableRepository timetableRepo;
	public Timetable saveTimetable(Timetable timetable) {
		return timetableRepo.save(timetable);
	}
	public Timetable updateTimetable(Timetable timetable) {
		return timetableRepo.save(timetable);
	}
	public List<Timetable> getAllTimetables(String collegename) {
		return (List<Timetable>) timetableRepo.findAllByCollegename(collegename);
	}
	public void deleteTimetable(int timetableid) {
		timetableRepo.deleteById(timetableid);
	}
	public Timetable findTimetableByTimetableid(int timetableid) {
		return timetableRepo.findById(timetableid).get();
	}
}