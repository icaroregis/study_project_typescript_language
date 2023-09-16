import Negociacao from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacoesView {
  constructor(seletor: string, private elemento: HTMLElement = document.querySelector(seletor)) {}

  public template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered"> 
        <thead>
          <tr>
            <th>DATA</th> 
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model
            .lista()
            .map((negociacao: Negociacao) => {
              return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>   
                <td>${negociacao.quantidade}</td> 
                <td>${negociacao.valor}</td> 
              </tr> 
            `;
            })
            .join('')} 
        </tbody>
      </table>
    `;
  }

  public update(model: Negociacoes): void {
    const template = this.template(model);
    console.log(template);
    this.elemento.innerHTML = template;
  }
}
