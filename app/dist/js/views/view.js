export class View {
    constructor(seletor, elemento = document.querySelector(seletor)) {
        this.seletor = seletor;
        this.elemento = elemento;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
