package com.example.suivi.model;

public class TacheDTO {
    private int id;
    private String details;
    private String etat;
    private String commentaire;
    private String titre;
    private int projetId;       // ID of the associated project
    private String projetTitre; // Title of the associated project
    private int utilisateurId;  // ID of the assigned user
    private String utilisateurNom; // Name of the assigned user

    // Constructor that maps a `Tache` entity to this DTO
    public TacheDTO(Tache tache) {
        this.id = tache.getId();
        this.details = tache.getDetails();
        this.etat = tache.getEtat();
        this.commentaire = tache.getCommentaire();
        this.titre = tache.getTitre();

        // Map the associated project
        this.projetId = tache.getProjet() != null ? tache.getProjet().getId() : 0;
        this.projetTitre = tache.getProjet() != null ? tache.getProjet().getTitre() : null;

        // Map the associated user
        this.utilisateurId = tache.getUtilisateur() != null ? tache.getUtilisateur().getId() : 0;
        this.utilisateurNom = tache.getUtilisateur() != null ? tache.getUtilisateur().getNom() : null;
    }

    // Getters and setters (or use Lombok @Data for brevity)
    public int getId() {
        return id;
    }

    public String getDetails() {
        return details;
    }

    public String getEtat() {
        return etat;
    }

    public String getCommentaire() {
        return commentaire;
    }

    public String getTitre() {
        return titre;
    }

    public int getProjetId() {
        return projetId;
    }

    public String getProjetTitre() {
        return projetTitre;
    }

    public int getUtilisateurId() {
        return utilisateurId;
    }

    public String getUtilisateurNom() {
        return utilisateurNom;
    }
}
