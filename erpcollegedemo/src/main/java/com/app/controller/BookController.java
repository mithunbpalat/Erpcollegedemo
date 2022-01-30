package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Book;
import com.app.service.BookService;

@RestController
@CrossOrigin("*")
public class BookController {
	@Autowired
	private BookService bookServ;
	
	@PostMapping(value="postbook")
	public List<Book> saveBook(@RequestBody Book book){
		System.out.println("Book works");
		String collegename = book.getCollegename();
		bookServ.saveBook(book);
		return bookServ.getAllBooks(collegename);
	}
	@PutMapping(value="updatebook")
	public List<Book> updateBook(@RequestBody Book book){
		System.out.println("Book update works");
		String collegename = book.getCollegename();
		bookServ.updateBook(book);
		return bookServ.getAllBooks(collegename);
	}
	@GetMapping(value="getallbooks")
	public List<Book> getAllBook(@RequestParam String collegename){
		return bookServ.getAllBooks(collegename);
	}
	@DeleteMapping(value="deletebookbyid")
	public List<Book> deleteBook(@RequestParam int bid){
		Book book = bookServ.findBookByBid(bid);
		String collegename = book.getCollegename();
		bookServ.deleteBook(bid);
		return bookServ.getAllBooks(collegename);
	}
	@GetMapping(value="getbookbyid")
	public Book getBookById(@RequestParam int bid){
		return bookServ.findBookByBid(bid);
	}
}
