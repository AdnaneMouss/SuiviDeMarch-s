package com.example.suivi.repository;

import com.example.suivi.model.Cps;
import com.example.suivi.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CpsRepository extends JpaRepository<Cps, Integer> {

}
