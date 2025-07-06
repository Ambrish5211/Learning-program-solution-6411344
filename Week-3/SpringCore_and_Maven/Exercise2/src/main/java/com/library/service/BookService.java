package com.library.service;

import com.repository.service.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter method for DI
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void listBooks() {
        bookRepository.fetchAllBooks();
    }
    public BookService(){
        System.out.println("BookService object created");
    }
}
