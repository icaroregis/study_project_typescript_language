//Só View tem acesso a um propriedade privada e seus filhos no caso a quem nós extendermos. Nenhuma outra classe terá acesso a não ser as classes filhas.
//A classe abstrata não pode ser criada uma instancia diretamente dela, só pode se o filho herda essa classe e se o filho for instanciado.
export class View {
    constructor(seletor, elemento = document.querySelector(seletor)) {
        this.seletor = seletor;
        this.elemento = elemento;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
