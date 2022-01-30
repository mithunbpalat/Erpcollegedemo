package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{

	@Query("SELECT d FROM Book d where d.collegename= ?1")
	List<Book> findAllByCollegename(String collegename);
}
