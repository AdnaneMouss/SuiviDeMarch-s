package com.example.suivi;

import com.example.suivi.controller.ProjetController;
import com.example.suivi.model.Utilisateur;
import com.example.suivi.repository.ProjetRepository;
import com.example.suivi.service.ProjetService;
import com.example.suivi.service.UtilisateurService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SuiviApplication {


	public static void main(String[] args) {
		SpringApplication.run(SuiviApplication.class, args);
	}
}
