// Regras de negócio.
// Uma negociação não pode ser modificada depois de criada
// Uma negociação obrigatoriamente tem uma data, uma quantidade e um valor

import Negociacao from './models/negociacao.js';

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);
