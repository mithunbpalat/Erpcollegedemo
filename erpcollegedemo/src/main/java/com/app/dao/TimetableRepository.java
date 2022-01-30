package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Timetable;

@Repository
public interface TimetableRepository extends JpaRepository<Timetable, Integer>{
	
	@Query("SELECT d FROM Timetable d where d.collegename= ?1")
	List<Timetable> findAllByCollegename(String collegename);

}
