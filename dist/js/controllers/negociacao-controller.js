import Negociacao from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
export class NegociacaoController {
    constructor(inputData = document.querySelector('#data'), inputQuantidade = document.querySelector('#quantidade'), inputValor = document.querySelector('#valor'), negociacoes = new Negociacoes()) {
        this.inputData = inputData;
        this.inputQuantidade = inputQuantidade;
        this.inputValor = inputValor;
        this.negociacoes = negociacoes;
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        return new Negociacao(date, Number(this.inputQuantidade.value), Number(this.inputValor.value));
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
