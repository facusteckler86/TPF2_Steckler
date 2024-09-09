// Base de la plantilla para interface de cursos

export interface Course {
  id: string;
  name: string;
  starDate: Date,
  endDate: Date

}

// Base de la plantilla de la interface de usuarios

export type UserRole = 'ADMIN' | 'USER';

export interface User {
  email: string;
  password: string;
  role: UserRole;
  id: string;
  name: string;
  apellido: string;
  token: string;
}
export interface ADMIN {
  email: string,
  password: string,
  id: string,
  token: string,
  name: string,
  apellido: string
}

export interface students {
  id: Number;
  name: string;

}

export interface studentsList {
  id: number;
  name: string;
  apellido: string;
  course: string;
};

export interface role {
  id: number;
  name: string,
  apellido: string
}
