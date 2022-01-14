package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.LibrarianRepository;
import com.app.model.Librarian;

@Service
public class LibrarianService {
	@Autowired
	private LibrarianRepository librarianRepo;
	public Librarian saveLibrarian(Librarian librarian) {
		return librarianRepo.save(librarian);
	}
	public Librarian updateLibrarian(Librarian librarian) {
		return librarianRepo.save(librarian);
	}
	public List<Librarian> getAllLibrarians(String collegename) {
		return (List<Librarian>) librarianRepo.findAllByCollegename(collegename);
	}
	public void deleteLibrarian(int lid) {
		librarianRepo.deleteById(lid);
	}
	public Librarian findLibrarianByLid(int lid) {
		return librarianRepo.findById(lid).get();
	}
	public Librarian getLibrarianByUsername(String collegename ,String username) {
		return librarianRepo.findByUsername(collegename ,username);
	}
	public Librarian findLibrarianByLibrarianusername(String collegename,String username) {
		return librarianRepo.findByUsername(collegename,username);
	}
}

