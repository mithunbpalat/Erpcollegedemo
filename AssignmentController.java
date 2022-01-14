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

import com.app.model.Assignment;
import com.app.service.AssignmentService;

@RestController
@CrossOrigin("*")
public class AssignmentController {
	@Autowired
	private AssignmentService assignmentServ;
	
	@PostMapping(value="postassignment")
	public List<Assignment> saveAssignment(@RequestBody Assignment assignment){
		System.out.println("Assignment works");
		String collegename = assignment.getCollegename();
		assignmentServ.saveAssignment(assignment);
		return assignmentServ.getAllAssignments(collegename);
	}
	@PutMapping(value="updateassignment")
	public List<Assignment> updateAssignment(@RequestBody Assignment assignment){
		System.out.println("Assignment update works");
		String collegename = assignment.getCollegename();
		assignmentServ.updateAssignment(assignment);
		return assignmentServ.getAllAssignments(collegename);
	}
	@GetMapping(value="getallassignments")
	public List<Assignment> getAllAssignment(@RequestParam String collegename){
		return assignmentServ.getAllAssignments(collegename);
	}
	@DeleteMapping(value="deleteassignmentbyid")
	public List<Assignment> deleteAssignment(@RequestParam int aid){
		Assignment assign = assignmentServ.findAssignmentByAid(aid);
		String collegename = assign.getCollegename();
		assignmentServ.deleteAssignment(aid);
		return assignmentServ.getAllAssignments(collegename);
	}
	@GetMapping(value="getassignmentbyid")
	public Assignment getAssignmentById(@RequestParam int aid){
		return assignmentServ.findAssignmentByAid(aid);
	}
}
