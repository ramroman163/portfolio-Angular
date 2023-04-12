export class Proyecto {
    id! : number;
    nombreProyecto : string;
    descProyecto : string;
    linkProyecto : string;

    constructor(nombreProyecto : string, descProyecto : string, linkProyecto : string){
        this.nombreProyecto = nombreProyecto;
        this.descProyecto = descProyecto;
        this.linkProyecto = linkProyecto;
    }
}
