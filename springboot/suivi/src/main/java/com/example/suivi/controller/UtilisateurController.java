package com.example.suivi.controller;

import com.example.suivi.model.Projet;
import com.example.suivi.model.Utilisateur;
import com.example.suivi.service.ProjetService;
import com.example.suivi.service.UtilisateurService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UtilisateurController {

    private final UtilisateurService utilisateurService;

    public UtilisateurController(UtilisateurService utilisateurService) {
        this.utilisateurService = utilisateurService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Utilisateur>> getUsers() {
        List<Utilisateur> users = utilisateurService.getAllUsers();
        return ResponseEntity.ok().body(users);
    }


}
