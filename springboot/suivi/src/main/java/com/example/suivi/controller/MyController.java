package com.example.suivi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping("/api/data")
    public String getData() {
        return "Hello from Spring Boot!";
    }
}
