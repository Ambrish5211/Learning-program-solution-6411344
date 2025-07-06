package com.cognizant.LibraryManagement;

import com.library.service.BookService;
import com.repository.service.BookRepository;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
        BookService obj = (BookService) context.getBean("BookService");
        BookRepository obj1 =(BookRepository) context.getBean("BookRepository");

        obj.listBooks();
    }

}
