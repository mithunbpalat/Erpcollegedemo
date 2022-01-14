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

import com.app.model.Even;
import com.app.service.EvenService;

@RestController
@CrossOrigin("*")
public class EvenController {
	@Autowired
	private EvenService evenServ;
	
	@PostMapping(value="posteven")
	public List<Even> saveEvent(@RequestBody Even even){
		System.out.println("Even works");
		String collegename = even.getCollegename();
		evenServ.saveEven(even);
		return evenServ.getAllEvens(collegename);
	}
	@PutMapping(value="updateeven")
	public List<Even> updateEvent(@RequestBody Even even){
		System.out.println("Even update works");
		String collegename = even.getCollegename();
		evenServ.updateEven(even);
		return evenServ.getAllEvens(collegename);
	}
	@GetMapping(value="getallevens")
	public List<Even> getAllEven(@RequestParam String collegename){
		System.out.println("Even works");
		return evenServ.getAllEvens(collegename);
	}
	@DeleteMapping(value="deleteevenbyid")
	public List<Even> deleteEvent(@RequestParam int eid){
		Even even = evenServ.findEvenByEid(eid);
		String collegename = even.getCollegename();
		evenServ.deleteEven(eid);
		return evenServ.getAllEvens(collegename);
	}
	@GetMapping(value="getevenbyid")
	public Even getEventById(@RequestParam int eid){
		return evenServ.findEvenByEid(eid);
	}
}