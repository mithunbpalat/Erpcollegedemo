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

import com.app.model.Student;
import com.app.service.StudentService;

@RestController
@CrossOrigin("*")
public class StudentController {
	@Autowired
	private StudentService studentServ;
	
	/*@Bean
	public BCryptPasswordEncoder encode() {
		return new BCryptPasswordEncoder();
	}*/
	//private BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping(value="poststudent")
	public List<Student> saveStudent(@RequestBody Student student){
		System.out.println("Student works");
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String pwd = student.getStudpassword();
		String encryptPwd=encoder.encode(pwd);
		student.setStudpassword(encryptPwd);
		String collegename = student.getCollegename();
		System.out.println(encryptPwd);
		studentServ.saveStudent(student);
		return studentServ.getAllStudents(collegename);
	}
	@PutMapping(value="updatestudent")
	public List<Student> updateStudent(@RequestBody Student student){
		System.out.println("Student update works");
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String pwd = student.getStudpassword();
		String encryptPwd=encoder.encode(pwd);
		student.setStudpassword(encryptPwd);
		String collegename = student.getCollegename();
		System.out.println(encryptPwd);
		studentServ.updateStudent(student);
		return studentServ.getAllStudents(collegename);
	}
	@GetMapping(value="getallstudents")
	public List<Student> getAllStudent(@RequestParam String collegename){
		return studentServ.getAllStudents(collegename);
	}
	@DeleteMapping(value="deletestudentbyid")
	public List<Student> deleteStudent(@RequestParam int admno){
		Student student = studentServ.findStudentByAdmno(admno);
		String collegename = student.getCollegename();
		studentServ.deleteStudent(admno);
		return studentServ.getAllStudents(collegename);
	}
	@GetMapping(value="getstudentbyid")
	public Student getStudentById(@RequestParam int admno){
		return studentServ.findStudentByAdmno(admno);
	}
	@PostMapping(value="getstudentbyusername")
	public String getStudentByUsername(@RequestBody Student student){
		String s = "1";
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String collegename= student.getCollegename();
		String username= student.getStudusername();
		String testpwd = student.getStudpassword();
		//String testencryptPwd = encoder.encode(testpwd);
		Student stud = studentServ.getStudentAdminByUsername(collegename,username);
		String originalpwd = stud.getStudpassword();
		//stud.setStatus(s);
		System.out.println(originalpwd);
		System.out.println(testpwd);


		if (originalpwd.equals(testpwd)) {
			s= "authenticated";
			System.out.println(s);
		}
		return s;
	}
	@GetMapping(value="getstudentbystudusername")
	public Student getStudentByStudusername(@RequestParam String collegename,@RequestParam String studusername){
		return studentServ.findStudentByAdminusername(collegename,studusername);
	}
}

