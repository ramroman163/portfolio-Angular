export class Educacion {
    id! : number;
    institucionEdu! : string;
    tituloEdu! : string;
    carreraEdu! : string;
    inicioEdu! : string;
    finEdu! : string;
    linkImg! : string;

    constructor(institucionEdu : string, tituloEdu : string, carreraEdu : string, inicioEdu : string, finEdu : string, linkImg : string){
        this.institucionEdu = institucionEdu;
        this.tituloEdu = tituloEdu;
        this.carreraEdu = carreraEdu;
        this.inicioEdu = inicioEdu;
        this.finEdu = finEdu;
        this.linkImg = linkImg;
    }
}
