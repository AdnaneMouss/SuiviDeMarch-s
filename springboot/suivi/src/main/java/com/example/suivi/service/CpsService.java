package com.example.suivi.service;

import com.example.suivi.model.Cps;
import com.example.suivi.model.Utilisateur;
import com.example.suivi.model.UtilisateurDTO;
import com.example.suivi.repository.CpsRepository;
import com.example.suivi.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.spec.ChaCha20ParameterSpec;
import javax.xml.crypto.dsig.spec.C14NMethodParameterSpec;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CpsService {
@Autowired
    private final CpsRepository utilisateurRepository;

    public CpsService(CpsRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }


    public List<Cps> getAllUsers() {
        return utilisateurRepository.findAll();
    }



@Transactional
        public void addUser(Cps cps) {
          Cps newCps = new Cps();
          newCps.setNom(cps.getNom());
          newCps.setTasks(cps.getTasks());


            utilisateurRepository.save(cps);
        }
}
