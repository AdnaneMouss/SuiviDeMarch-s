export interface CpsDTO {
  id: number;
  nom: string;
  tasks: string;
  projectTitle: string; // Title of the associated project
  proposeParName: string; // Name of the user who proposed
  startDate: Date; // Start date of the associated project
  endDate: Date;
  budget: number;
}
