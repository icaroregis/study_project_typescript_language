//Só View tem acesso a um propriedade privada e seus filhos no caso a quem nós extendermos. Nenhuma outra classe terá acesso a não ser as classes filhas.

//A classe abstrata não pode ser criada uma instancia diretamente dela, só pode se o filho herda essa classe e se o filho for instanciado.
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logarTempoDeExecucao.js';

export abstract class View<T> {
  constructor(
    public seletor: string,
    //Só o pai no caso a classe pai e suas filhas podem ter acesso a uma variável protected. Vale o mesmo para um método.
    protected elemento: HTMLElement = document.querySelector(seletor) as HTMLElement,
  ) {}

  //com parametros
  @logarTempoDeExecucao(true)
  //sem parametros
  @inspect
  public update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  //quando o método abstrato é definido na classe pai obrigatoriamente ele deve ser definido nas classes filhas que herdarem dessa classe pai.
  protected abstract template(model: T): string;
}
