export class Proyecto{
    id?: number;
    tituloPr: string;
    descripcionPr: string;
    imgPr: string;
    repositorio: string;

    constructor(tituloPr: string, descripcionPr: string, imgPr: string, repositorio: string){
        this.tituloPr = tituloPr;
        this.descripcionPr = descripcionPr;
        this.imgPr = imgPr;
        this.repositorio = repositorio;
    }
}