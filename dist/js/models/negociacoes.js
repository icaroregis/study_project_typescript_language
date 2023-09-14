export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //O método ReadonlyArray permite a imutabilidade do array, preservando o array original.
    lista() {
        return this.negociacoes;
    }
}
