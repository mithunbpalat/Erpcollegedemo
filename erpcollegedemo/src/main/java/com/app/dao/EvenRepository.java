package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Even;

@Repository
public interface EvenRepository extends JpaRepository<Even, Integer>{
	
	@Query("SELECT d FROM Even d where d.collegename= ?1")
	List<Even> findAllByCollegename(String collegename);
}
