// Generated by https://quicktype.io

export interface SubjectResponse {
  content: SubjectA[];
  size: number;
  totalElements: number;
  pageNumber: number;
  first: boolean;
  last: boolean;
}

export interface SubjectA {
  id: string;
  asigNombre: string;
  asigDescripcion: string;
  nombreProfesor: string;
  color: string;
  numAlumnos: number;
}
