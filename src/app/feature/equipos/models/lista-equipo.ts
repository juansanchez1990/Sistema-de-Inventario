export interface ListaEquipo {
    id:number,
    Descripcion:string,
    Activo:string,
    idtipo:number,
    MarcaEquipo: {
        id:number
        Descripcion:string,
        Activo:boolean
    }
    TipoDeEquipo: {
        id:number
        Descripcion:string,
        Activo:boolean
    },
    Referencia:string,
    Estado:string
}
