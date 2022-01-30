package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.EvenRepository;
import com.app.model.Even;

@Service
public class EvenService {
	@Autowired
	private EvenRepository evenRepo;
	public Even saveEven(Even even) {
		return evenRepo.save(even);
	}
	public Even updateEven(Even even) {
		return evenRepo.save(even);
	}
	public List<Even> getAllEvens(String collegename) {
		return (List<Even>) evenRepo.findAllByCollegename(collegename);
	}
	public void deleteEven(int eid) {
		evenRepo.deleteById(eid);
	}
	public Even findEvenByEid(int eid) {
		return evenRepo.findById(eid).get();
	}
}