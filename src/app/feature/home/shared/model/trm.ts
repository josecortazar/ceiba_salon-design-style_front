export class Trm {
    valor: number;
    vigenciadesde: string;
    vigenciahasta: string;

    constructor(
        valor: number,
        vigenciadesde: string,
        vigenciahasta: string
    ) {
        this.valor = valor;
        this.vigenciadesde = vigenciadesde;
        this.vigenciahasta = vigenciahasta;
    }
}


