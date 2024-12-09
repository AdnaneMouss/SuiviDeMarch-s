package com.example.suivi.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Cps{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private String tasks;

    @OneToOne
    @JoinColumn(name = "project_id")
    @JsonIgnore
    private Projet project_id;
    @ManyToOne
    @JoinColumn(name = "propose_par_id")
    @JsonIgnore
    private Utilisateur proposePar;

    public Cps() {
    }

    public Cps(int id, String nom, String tasks, Projet project_id, Utilisateur utilisateur_id) {
        this.id = id;
        this.nom = nom;
        this.tasks = tasks;
        this.project_id = project_id;
        this.proposePar = utilisateur_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getTasks() {
        return tasks;
    }

    public void setTasks(String tasks) {
        this.tasks = tasks;
    }

    public Projet getProject_id() {
        return project_id;
    }

    public void setProject_id(Projet project_id) {
        this.project_id = project_id;
    }

    public Utilisateur getproposePar() {
        return proposePar;
    }

    public void setproposePar(Utilisateur utilisateur_id) {
        this.proposePar = utilisateur_id;
    }

    @Override
    public String toString() {
        return "Cps{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", tasks='" + tasks + '\'' +
                ", project_id=" + project_id +
                ", utilisateur_id=" + proposePar +
                '}';
    }
}
