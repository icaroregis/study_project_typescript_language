//Só View tem acesso a um propriedade privada e seus filhos no caso a quem nós extendermos. Nenhuma outra classe terá acesso a não ser as classes filhas.
//A classe abstrata não pode ser criada uma instancia diretamente dela, só pode se o filho herda essa classe e se o filho for instanciado.
export class View {
    constructor(seletor, 
    //Só o pai no caso a classe pai e suas filhas podem ter acesso a uma variável protected. Vale o mesmo para um método.
    elemento = document.querySelector(seletor), escapar = false) {
        this.seletor = seletor;
        this.elemento = elemento;
        this.escapar = escapar;
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        console.log(this.escapar);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
