package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.bcrypt.BCrypt;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

import com.app.model.Teacher;
import com.app.service.TeacherService;

@RestController
@CrossOrigin("*")
public class TeacherController {
	@Autowired
	private TeacherService teacherServ;
	
	/*@Bean
	public BCryptPasswordEncoder encode() {
		return new BCryptPasswordEncoder();
	}*/
	//private BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping(value="postteacher")
	public List<Teacher> saveTeacher(@RequestBody Teacher teacher){
		System.out.println("Teacher works");
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String pwd = teacher.getTeacherpassword();
		String encryptPwd=encoder.encode(pwd);
		teacher.setTeacherpassword(encryptPwd);
		String collegename = teacher.getCollegename();
		System.out.println(encryptPwd);
		teacherServ.saveTeacher(teacher);
		return teacherServ.getAllTeachers(collegename);
	}
	@PutMapping(value="updateteacher")
	public List<Teacher> updateTeacher(@RequestBody Teacher teacher){
		System.out.println("Teacher update works");
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String pwd = teacher.getTeacherpassword();
		String encryptPwd=encoder.encode(pwd);
		teacher.setTeacherpassword(encryptPwd);
		String collegename = teacher.getCollegename();
		System.out.println(encryptPwd);
		teacherServ.updateTeacher(teacher);
		return teacherServ.getAllTeachers(collegename);
	}
	@GetMapping(value="getallteachers")
	public List<Teacher> getAllTeacher(@RequestParam String collegename){
		return teacherServ.getAllTeachers(collegename);
	}
	@DeleteMapping(value="deleteteacherbyid")
	public List<Teacher> deleteTeacher(@RequestParam int tid){
		Teacher teacher = teacherServ.findTeacherByTid(tid);
		String collegename = teacher.getCollegename();
		teacherServ.deleteTeacher(tid);
		return teacherServ.getAllTeachers(collegename);
	}
	@GetMapping(value="getteacherbyid")
	public Teacher getTeacherById(@RequestParam int tid){
		return teacherServ.findTeacherByTid(tid);
	}
	@PostMapping(value="getteacherbyusername")
	public String getTeacherByUsername(@RequestBody Teacher teacher){
		String s = "1";
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String collegename= teacher.getCollegename();
		String username= teacher.getTeacherusername();
		String testpwd = teacher.getTeacherpassword();
		//String testencryptPwd = encoder.encode(testpwd);
		Teacher teach = teacherServ.getTeacherByUsername(collegename,username);
		String originalpwd = teach.getTeacherpassword();
		//stud.setStatus(s);
		System.out.println(originalpwd);
		System.out.println(testpwd);


		if (originalpwd.equals(testpwd)) {
			s= "authenticated";
			System.out.println(s);
		}
		return s;
	}
	@GetMapping(value="getteacherbyteacherusername")
	public Teacher getStudentByStudusername(@RequestParam String collegename,@RequestParam String teacherusername){
		return teacherServ.findTeacherByTeacherusername(collegename,teacherusername);
	}
}
