package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Assignment;

@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Integer>{
	
	@Query("SELECT d FROM Assignment d where d.collegename= ?1")
	List<Assignment> findAllByCollegename(String collegename);

}
