package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Librarian;

@Repository
public interface LibrarianRepository extends JpaRepository<Librarian, Integer>{
	
	@Query("SELECT d FROM Librarian d where d.collegename= ?1 and d.librarianusername =?2")
	Librarian findByUsername(String collegename, String username);
	
	@Query("SELECT d FROM Librarian d where d.collegename= ?1")
	List<Librarian> findAllByCollegename(String collegename);
}
