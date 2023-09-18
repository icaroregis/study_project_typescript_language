export class MensagemView {
  constructor(seletor: string, private elemento: HTMLElement = document.querySelector(seletor)) {}

  public template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>      
    `;
  }

  public update(model: string): void {
    this.elemento.innerHTML = this.template(model);
  }
}
