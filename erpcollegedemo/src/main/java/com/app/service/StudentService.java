package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.StudentRepository;
import com.app.model.Student;

@Service
public class StudentService {
	@Autowired
	private StudentRepository studentRepo;
	public Student saveStudent(Student student) {
		return studentRepo.save(student);
	}
	public Student updateStudent(Student student) {
		return studentRepo.save(student);
	}
	public List<Student> getAllStudents(String collegename) {
		return (List<Student>) studentRepo.findAllByCollegename(collegename);
	}
	public void deleteStudent(int admno) {
		studentRepo.deleteById(admno);
	}
	public Student findStudentByAdmno(int admno) {
		return studentRepo.findById(admno).get();
	}
	public Student getStudentAdminByUsername(String collegename ,String username) {
		return studentRepo.findByUsername(collegename ,username);
	}
	public Student findStudentByAdminusername(String collegename,String username) {
		return studentRepo.findByUsername(collegename,username);
	}
}
