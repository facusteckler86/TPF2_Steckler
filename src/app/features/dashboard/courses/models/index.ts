// Base de la plantilla para interface de cursos

export interface Course {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

// Base de la plantilla de la interface de usuarios

export type UserRole = 'ADMIN' | 'USER';

export interface User {
  email: string;
  password: string;
  role: UserRole;
}
