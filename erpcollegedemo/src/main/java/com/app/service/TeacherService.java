package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.TeacherRepository;
import com.app.model.Teacher;

@Service
public class TeacherService {
	@Autowired
	private TeacherRepository teacherRepo;
	public Teacher saveTeacher(Teacher teacher) {
		return teacherRepo.save(teacher);
	}
	public Teacher updateTeacher(Teacher teacher) {
		return teacherRepo.save(teacher);
	}
	public List<Teacher> getAllTeachers(String collegename) {
		return (List<Teacher>) teacherRepo.findAllByCollegename(collegename);
	}
	public void deleteTeacher(int tid) {
		teacherRepo.deleteById(tid);
	}
	public Teacher findTeacherByTid(int tid) {
		return teacherRepo.findById(tid).get();
	}
	public Teacher getTeacherByUsername(String collegename ,String username) {
		return teacherRepo.findByUsername(collegename ,username);
	}
	public Teacher findTeacherByTeacherusername(String collegename,String username) {
		return teacherRepo.findByUsername(collegename,username);
	}
}
