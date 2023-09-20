import { DiasDaSemana } from '../enums/diasDaSemana.js';
import Negociacao from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    constructor(inputData = document.querySelector('#data'), inputQuantidade = document.querySelector('#quantidade'), inputValor = document.querySelector('#valor'), negociacoes = new Negociacoes(), negociacoesView = new NegociacoesView('#negociacoesView'), mensagemView = new MensagemView('#mensagemView')) {
        this.inputData = inputData;
        this.inputQuantidade = inputQuantidade;
        this.inputValor = inputValor;
        this.negociacoes = negociacoes;
        this.negociacoesView = negociacoesView;
        this.mensagemView = mensagemView;
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            return this.mensagemView.update('Apenas negociações em dias úteis são aceitas!');
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUtil(date) {
        //o getDay retona o dia da semana. Começa com zero: Domingo e termina com seis: sábado.
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = Number(this.inputQuantidade.value);
        const valor = Number(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
