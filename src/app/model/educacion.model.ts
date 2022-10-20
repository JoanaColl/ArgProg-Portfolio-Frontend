export class Educacion{
    id?: number;
    tituloEd: string;
    institucion: string;
    fechaInicio: number;
    fechaFin: number;
    descripcionEd: string;

    constructor(tituloEd: string, institucion: string, fechaInicio: number, fechaFin: number, descripcionEd: string){
        this.tituloEd = tituloEd;
        this.institucion = institucion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcionEd = descripcionEd;
    }
}