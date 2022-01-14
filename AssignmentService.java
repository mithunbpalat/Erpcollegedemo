package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AssignmentRepository;
import com.app.model.Assignment;

@Service
public class AssignmentService {
	@Autowired
	private AssignmentRepository assignmentRepo;
	public Assignment saveAssignment(Assignment assignment) {
		return assignmentRepo.save(assignment);
	}
	public Assignment updateAssignment(Assignment assignment) {
		return assignmentRepo.save(assignment);
	}
	public List<Assignment> getAllAssignments(String collegename) {
		return (List<Assignment>) assignmentRepo.findAllByCollegename(collegename);
	}
	public void deleteAssignment(int aid) {
		assignmentRepo.deleteById(aid);
	}
	public Assignment findAssignmentByAid(int aid) {
		return assignmentRepo.findById(aid).get();
	}
}