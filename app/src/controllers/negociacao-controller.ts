import Negociacao from '../models/negociacao.js';
import { inspect } from '../decorators/inspect.js';
import { Negociacoes } from '../models/negociacoes.js';
import { DiasDaSemana } from '../enums/diasDaSemana.js';
import { MensagemView } from '../views/mensagem-view.js';
import { domInjector } from '../decorators/domInjector.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { logarTempoDeExecucao } from '../decorators/logarTempoDeExecucao.js';

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;

  constructor(
    private negociacoes: Negociacoes = new Negociacoes(),
    private negociacoesView = new NegociacoesView('#negociacoesView'),
    private mensagemView = new MensagemView('#mensagemView'),
  ) {
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect
  @logarTempoDeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      Number(this.inputQuantidade.value),
      Number(this.inputValor.value),
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      return this.mensagemView.update('Apenas negociações em dias úteis são aceitas!');
    }

    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  private ehDiaUtil(date: Date) {
    //o getDay retona o dia da semana. Começa com zero: Domingo e termina com seis: sábado.
    return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
  }

  private limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!');
  }
}
