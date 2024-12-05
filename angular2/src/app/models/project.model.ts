export interface Project {
  id: number;
  dateDebut: string;
  dateFin: string;
  etat: string;
  titre: string;
  budget: number;
  approved: Boolean | null;// New field
}
