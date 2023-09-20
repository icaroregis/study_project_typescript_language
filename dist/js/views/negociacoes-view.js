import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
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
            .map((negociacao) => {
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
