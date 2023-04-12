export class Experiencia {
    id! : number;
    puestoExp : string;
    lugarExp : string;
    inicioExp : string;
    finExp : string;
    linkImg : string;

    constructor(puestoExp : string, lugarExp : string, inicioExp : string, finExp : string, linkImg : string){
        this.puestoExp = puestoExp;
        this.lugarExp = lugarExp;
        this.inicioExp = inicioExp;
        this.finExp = finExp;
        this.linkImg = linkImg;
    }
}
