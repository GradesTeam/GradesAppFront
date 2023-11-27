export class POSTInstrumentoDTO{
    nombre: String
    contenidos: String
    fecha: number
    referentes: String[]
    constructor(name:string, content:string, date:number, refs: String[]){
        this.nombre = name;
        this.contenidos = content;
        this.fecha = date;
        this.referentes = refs;
    }
}