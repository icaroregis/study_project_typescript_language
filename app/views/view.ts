//Só View tem acesso a um propriedade privada e seus filhos no caso a quem nós extendermos. Nenhuma outra classe terá acesso a não ser as classes filhas.

//A classe abstrata não pode ser criada uma instancia diretamente dela, só pode se o filho herda essa classe e se o filho for instanciado.
export abstract class View<T> {
  constructor(
    public seletor: string,
    protected elemento: HTMLElement = document.querySelector(seletor),
  ) {}

  public update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  //quando o método abstrato é definido na classe pai obrigatoriamente ele deve ser definido nas classes filhas que herdarem dessa classe pai.
  abstract template(model: T): string;
}
