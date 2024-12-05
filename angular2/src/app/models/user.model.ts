export interface User {
  id: number;        // Corresponds to the @Id field
  nom: string;       // User's name
  email: string;     // User's email
  password: string;  // User's password
  gsm: string;       // User's GSM (phone number)
  type: string;      // User's type
}
