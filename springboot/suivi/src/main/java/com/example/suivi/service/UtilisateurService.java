package com.example.suivi.service;

import com.example.suivi.model.Projet;
import com.example.suivi.model.Utilisateur;
import com.example.suivi.repository.ProjetRepository;
import com.example.suivi.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UtilisateurService {
@Autowired
    private final UtilisateurRepository utilisateurRepository;

    public UtilisateurService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }


    public List<Utilisateur> getAllUsers() {
        return utilisateurRepository.findAll();
    }


}