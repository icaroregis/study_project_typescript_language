import Negociacao from './negociacao';

export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  //O método ReadonlyArray permite a imutabilidade do array, preservando o array original.
  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
