package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.College;
import com.app.service.CollegeService;

@RestController
@CrossOrigin("*")
public class CollegeController {
	@Autowired
	private CollegeService collegeServ;
	
	@Bean
	public BCryptPasswordEncoder encode() {
		return new BCryptPasswordEncoder();
	}
	//private BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping(value="postcollege")
	public List<College> saveCollege(@RequestBody College college){
		System.out.println("College works");
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String pwd = college.getAdminpassword();
		String encryptPwd=encoder.encode(pwd);
		college.setAdminpassword(encryptPwd);
		System.out.println(encryptPwd);
		collegeServ.saveCollege(college);
		return collegeServ.getAllColleges();
	}
	@PutMapping(value="updatecollege")
	public List<College> updateCollege(@RequestBody College college){
		System.out.println("College update works");
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String pwd = college.getAdminpassword();
		String encryptPwd=encoder.encode(pwd);
		college.setAdminpassword(encryptPwd);
		System.out.println(encryptPwd);
		collegeServ.updateCollege(college);
		return collegeServ.getAllColleges();
	}
	@GetMapping(value="getallcolleges")
	public List<College> getAllCollege(){
		return collegeServ.getAllColleges();
	}
	@DeleteMapping(value="deletecollegebyid")
	public List<College> deleteCollege(@RequestParam int cid){
		collegeServ.deleteCollege(cid);
		return collegeServ.getAllColleges();
	}
	@GetMapping(value="getcollegebyid")
	public College getCollegeById(@RequestParam int cid){
		return collegeServ.findCollegeByCid(cid);
	}
	@PostMapping(value="getcollegeadminbyusername")
	public String getCollegeadminByUsername(@RequestBody College college){
		String s = "1";
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String collegename= college.getCollegename();
		String username= college.getAdminusername();
		String testpwd = college.getAdminpassword();
		//String testencryptPwd = encoder.encode(testpwd);
		College coll = collegeServ.getCollegeAdminByUsername(collegename,username);
		String originalpwd = coll.getAdminpassword();
		coll.setStatus(s);
		System.out.println(originalpwd);
		System.out.println(testpwd);


		if (originalpwd.equals(testpwd)) {
			s= "authenticated";
			System.out.println(s);
		}
		return s;
	}
	@GetMapping(value="getcollegebyadminusername")
	public College getCollegeByAdminusername(@RequestParam String collegename,@RequestParam String adminusername){
		return collegeServ.findCollegeByAdminusername(collegename,adminusername);
	}
}

