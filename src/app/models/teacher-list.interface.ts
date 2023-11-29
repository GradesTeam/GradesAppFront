export interface TeacherListResponse {
    content: TeacherItem[];
    size: number;
    totalElements: number;
    pageNumber: number;
    first: boolean;
    last: boolean;
}
export interface TeacherItem{
    id: string;
    nombre: string;
    titulacion: string;
}
