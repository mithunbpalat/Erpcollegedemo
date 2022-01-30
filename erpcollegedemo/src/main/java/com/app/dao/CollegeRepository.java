package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.College;

@Repository
public interface CollegeRepository extends JpaRepository<College, Integer>{
	
	@Query("SELECT d FROM College d where d.collegename= ?1 and d.adminusername =?2")
	College findByUsername(String collegename, String username);
	
	@Query("SELECT d FROM College d where d.collegename= ?1 and d.adminusername =?2")
	College findByAdminusername(String collegename, String username);
}
