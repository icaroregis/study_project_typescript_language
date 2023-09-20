import Negociacao from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {
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
              const dataFormatada = negociacao.data.toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
              });
              return `
              <tr>
                <td>${dataFormatada}</td>     
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
}
