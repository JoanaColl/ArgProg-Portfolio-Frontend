export class Experiencia{
    id?: number;
    tituloEx: string;
    empleador: string;
    fechaInicio: number;
    fechaFin: number;
    descripcionEx: string;

    constructor(tituloEx: string, empleador: string, fechaInicio: number, fechaFin: number, descripcionEx: string){
        this.tituloEx = tituloEx;
        this.empleador = empleador;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcionEx = descripcionEx;
    }
}