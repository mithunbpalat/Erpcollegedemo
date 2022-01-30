package com.app.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CollegeRepository;
import com.app.model.College;

@Service
public class CollegeService {
	@Autowired
	private CollegeRepository collegeRepo;
	public College saveCollege(College college) {
		return collegeRepo.save(college);
	}
	public College updateCollege(College college) {
		return collegeRepo.save(college);
	}
	public List<College> getAllColleges() {
		return (List<College>) collegeRepo.findAll();
	}
	public void deleteCollege(int cid) {
		collegeRepo.deleteById(cid);
	}
	public College findCollegeByCid(int cid) {
		return collegeRepo.findById(cid).get();
	}
	public College getCollegeAdminByUsername(String collegename ,String username) {
		return collegeRepo.findByUsername(collegename ,username);
	}
	public College findCollegeByAdminusername(String collegename,String username) {
		return collegeRepo.findByAdminusername(collegename,username);
	}
}
