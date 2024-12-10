package com.example.suivi.controller;

import com.example.suivi.model.Utilisateur;
import com.example.suivi.model.UtilisateurDTO;
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
    public ResponseEntity<?> login(@RequestBody Utilisateur utilisateur) {
        UtilisateurDTO foundUser = utilisateurService.findByEmailAndPassword(utilisateur.getEmail(), utilisateur.getPassword());

        if (foundUser != null) {
            // Retourne le DTO de l'utilisateur avec son type en cas de succès
            return ResponseEntity.ok().body(foundUser);
        } else {
            // Retourne une réponse 401 en cas d'échec
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
