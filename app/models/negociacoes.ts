import Negociacao from './negociacao';

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  //O método ReadonlyArray permite a imutabilidade do array, preservando o array original.
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
