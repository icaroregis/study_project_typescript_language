import Negociacao from '../models/negociacao.js';

export class NegociacaoController {
  constructor(
    private _inputData = document.querySelector('#data') as HTMLInputElement,
    private _inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement,
    private _inputValor = document.querySelector('#valor') as HTMLInputElement,
  ) {}

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    console.log(negociacao);
    this.limparFormulario();
  }

  public criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this._inputData.value.replace(exp, ','));

    return new Negociacao(
      date,
      Number(this._inputQuantidade.value),
      Number(this._inputValor.value),
    );
  }

  public limparFormulario(): void {
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';
    this._inputData.focus();
  }
}
