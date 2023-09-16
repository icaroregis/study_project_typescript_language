import Negociacao from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  constructor(
    private inputData = document.querySelector('#data') as HTMLInputElement,
    private inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement,
    private inputValor = document.querySelector('#valor') as HTMLInputElement,
    private negociacoes: Negociacoes = new Negociacoes(),
    private negociacoesView = new NegociacoesView('#negociacoesView'),
  ) {
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.negociacoes);
    this.limparFormulario();
  }

  public criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));

    return new Negociacao(date, Number(this.inputQuantidade.value), Number(this.inputValor.value));
  }

  public limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}
