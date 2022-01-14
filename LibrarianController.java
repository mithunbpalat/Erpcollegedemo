package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.crypto.bcrypt.BCrypt;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Librarian;
import com.app.service.LibrarianService;

@RestController
@CrossOrigin("*")
public class LibrarianController {
	@Autowired
	private LibrarianService librarianServ;
	
	/*@Bean
	public BCryptPasswordEncoder encode() {
		return new BCryptPasswordEncoder();
	}*/
	//private BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping(value="postlibrarian")
	public List<Librarian> saveLibrarian(@RequestBody Librarian librarian){
		System.out.println("Librarian works");
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String pwd = librarian.getLibrarianpassword();
		String encryptPwd=encoder.encode(pwd);
		librarian.setLibrarianpassword(encryptPwd);
		String collegename = librarian.getCollegename();
		System.out.println(encryptPwd);
		librarianServ.saveLibrarian(librarian);
		return librarianServ.getAllLibrarians(collegename);
	}
	@PutMapping(value="updatelibrarian")
	public List<Librarian> updateLibrarian(@RequestBody Librarian librarian){
		System.out.println("Librarian update works");
		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String pwd = librarian.getLibrarianpassword();
		String encryptPwd=encoder.encode(pwd);
		librarian.setLibrarianpassword(encryptPwd);
		String collegename = librarian.getCollegename();
		System.out.println(encryptPwd);
		librarianServ.updateLibrarian(librarian);
		return librarianServ.getAllLibrarians(collegename);
	}
	@GetMapping(value="getalllibrarians")
	public List<Librarian> getAllLibrarian(@RequestParam String collegename){
		return librarianServ.getAllLibrarians(collegename);
	}
	@DeleteMapping(value="deletelibrarianbyid")
	public List<Librarian> deleteLibrarian(@RequestParam int lid){
		Librarian librarian = librarianServ.findLibrarianByLid(lid);
		String collegename = librarian.getCollegename();
		librarianServ.deleteLibrarian(lid);
		return librarianServ.getAllLibrarians(collegename);
	}
	@GetMapping(value="getlibrarianbyid")
	public Librarian getLibrarianById(@RequestParam int lid){
		return librarianServ.findLibrarianByLid(lid);
	}
	@PostMapping(value="getlibrarianbyusername")
	public String getLibrarianByUsername(@RequestBody Librarian librarian){
		String s = "1";
		//PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
		String collegename= librarian.getCollegename();
		String username= librarian.getLibrarianusername();
		String testpwd = librarian.getLibrarianpassword();
		//String testencryptPwd = encoder.encode(testpwd);
		Librarian lib = librarianServ.getLibrarianByUsername(collegename,username);
		String originalpwd = lib.getLibrarianpassword();
		//stud.setStatus(s);
		System.out.println(originalpwd);
		System.out.println(testpwd);


		if (originalpwd.equals(testpwd)) {
			s= "authenticated";
			System.out.println(s);
		}
		return s;
	}
	@GetMapping(value="getlibrarianbylibrarianusername")
	public Librarian getLibrarianByLibrarianusername(@RequestParam String collegename,@RequestParam String librarianusername){
		return librarianServ.findLibrarianByLibrarianusername(collegename,librarianusername);
	}
}
