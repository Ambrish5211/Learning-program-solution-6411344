package com.cognizant.spring_learn_helloWorld.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class HelloController {


    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/")
    public String helloWorld(){
        return "Hello World";
    }
}
