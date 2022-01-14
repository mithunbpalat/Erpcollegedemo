package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer>{
	
	@Query("SELECT d FROM Teacher d where d.collegename= ?1 and d.teacherusername =?2")
	Teacher findByUsername(String collegename, String username);
	
	@Query("SELECT d FROM Teacher d where d.collegename= ?1")
	List<Teacher> findAllByCollegename(String collegename);
}
