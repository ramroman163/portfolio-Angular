export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    profesion : string;
    ubicacion : string;
    linkImgPerfil: string;
    linkImgBanner: string;
    acercaDeMi : string;

    constructor(nombre: string, apellido: string, profesion : string, ubicacion : string, linkImgPerfil: string, linkImgBanner: string, acercaDeMi : string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.ubicacion = ubicacion;
        this.linkImgPerfil = linkImgPerfil;
        this.linkImgBanner = linkImgBanner;
        this.acercaDeMi = acercaDeMi;
    }
}