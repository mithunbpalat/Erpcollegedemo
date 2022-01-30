package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Attendance;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Integer>{

	@Query("SELECT d FROM Attendance d where d.collegename= ?1")
	List<Attendance> findAllByCollegename(String collegename);
}
