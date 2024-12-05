package com.example.suivi.service;

import com.example.suivi.model.Projet;
import com.example.suivi.repository.ProjetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProjetService {
@Autowired
    private final ProjetRepository projetRepository;

    public ProjetService(ProjetRepository projetRepository) {
        this.projetRepository = projetRepository;
    }

    @Transactional
    public List<Projet> getAllProjects() {
        return projetRepository.fetchAll();
    }

public Projet approveProject(int id) {
    Projet projet = projetRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
    projet.setApproved(Boolean.TRUE);
    return projetRepository.save(projet);
}

    public Projet disApproveProject(int id) {
        Projet projet = projetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
        projet.setApproved(Boolean.FALSE);
        return projetRepository.save(projet);
    }
}