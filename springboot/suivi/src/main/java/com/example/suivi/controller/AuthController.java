package com.example.suivi.controller;

import com.example.suivi.model.Utilisateur;
import com.example.suivi.service.UtilisateurService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UtilisateurService utilisateurService;
    public AuthController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Utilisateur utilisateur) {
        Utilisateur foundUser = utilisateurService.findByEmailAndPassword(utilisateur.getEmail(), utilisateur.getPassword());
        if (foundUser != null) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
