
export interface Task {

  id: number;
  details: string;
  etat: string;
  commentaire: string;
  titre: string;
  projetId: number;
  projetTitre: string | null; // Title of the associated project
  utilisateurId: number;
  utilisateurNom: string | null; // Name of the assigned user
}
