package com.example.suivi.model;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private String email;
    private String password;
    private String gsm;
    private String type;

    @OneToMany(mappedBy = "proposePar", fetch = FetchType.EAGER)
    private List<Projet> projetsProposes;

    @OneToMany(mappedBy = "approuvePar", fetch = FetchType.EAGER)
    private List<Projet> projetsApprouves;

    @OneToMany(mappedBy = "utilisateur", fetch = FetchType.EAGER)
    private List<Tache> taches;

    public Utilisateur(int id, String nom, String password, String email, String gsm, String type, List<Projet> projetsProposes, List<Projet> projetsApprouves, List<Tache> taches) {
        this.id = id;
        this.nom = nom;
        this.password = password;
        this.email = email;
        this.gsm = gsm;
        this.type = type;
        this.projetsProposes = projetsProposes;
        this.projetsApprouves = projetsApprouves;
        this.taches = taches;
    }

    public Utilisateur(){}

    public List<Tache> getTaches() {
        return taches;
    }

    public void setTaches(List<Tache> taches) {
        this.taches = taches;
    }

    public List<Projet> getProjetsApprouves() {
        return projetsApprouves;
    }

    public void setProjetsApprouves(List<Projet> projetsApprouves) {
        this.projetsApprouves = projetsApprouves;
    }

    public List<Projet> getProjetsProposes() {
        return projetsProposes;
    }

    public void setProjetsProposes(List<Projet> projetsProposes) {
        this.projetsProposes = projetsProposes;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGsm() {
        return gsm;
    }

    public void setGsm(String gsm) {
        this.gsm = gsm;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

}
