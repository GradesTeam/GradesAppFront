export class POSTAlumnoDTO{
    nombre: string
    apellidos: String
    fechaNacimiento:Date
    email: String
    telefono: String
    username: String
    password: String
    constructor(nombre:string, apellidos:string, fechaNacimiento:Date, email:string, telefono: String, username: String, password: String){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.email = email;
        this.telefono = telefono;
        this.username = username;
        this.password = password;
    }
}