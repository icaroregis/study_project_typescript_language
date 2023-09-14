import Negociacao from '../models/negociacao.js';
export class NegociacaoController {
    constructor(_inputData = document.querySelector('#data'), _inputQuantidade = document.querySelector('#quantidade'), _inputValor = document.querySelector('#valor')) {
        this._inputData = _inputData;
        this._inputQuantidade = _inputQuantidade;
        this._inputValor = _inputValor;
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp, ','));
        return new Negociacao(date, Number(this._inputQuantidade.value), Number(this._inputValor.value));
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
}
