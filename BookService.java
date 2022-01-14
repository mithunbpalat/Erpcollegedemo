package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookRepository;
import com.app.model.Book;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepo;
	public Book saveBook(Book book) {
		return bookRepo.save(book);
	}
	public Book updateBook(Book book) {
		return bookRepo.save(book);
	}
	public List<Book> getAllBooks(String collegename) {
		return (List<Book>) bookRepo.findAllByCollegename(collegename);
	}
	public void deleteBook(int bid) {
		bookRepo.deleteById(bid);
	}
	public Book findBookByBid(int bid) {
		return bookRepo.findById(bid).get();
	}
}
