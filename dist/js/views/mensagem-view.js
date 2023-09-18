export class MensagemView {
    constructor(seletor, elemento = document.querySelector(seletor)) {
        this.elemento = elemento;
    }
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>      
    `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
