package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
	
	@Query("SELECT d FROM Student d where d.collegename= ?1 and d.studusername =?2")
	Student findByUsername(String collegename, String username);
	
	@Query("SELECT d FROM Student d where d.collegename= ?1")
	List<Student> findAllByCollegename(String collegename);
}
