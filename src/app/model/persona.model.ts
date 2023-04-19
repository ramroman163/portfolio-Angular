export class Persona{
    id?: number;
    nombre!: string;
    apellido!: string;
    profesion! : string;
    ubicacion! : string;
    linkImgPerfil: string = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    linkImgBanner: string = "https://img.freepik.com/foto-gratis/fondo-superficie-piedra_53876-31787.jpg";
    acercaDeMi! : string;

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