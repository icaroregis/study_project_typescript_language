//descriptor => Nos dá acesso a implementação do método decorado através de descriptor.value.
//propertyKey => nome do método.
export function logarTempoDeExecucao() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    //sobscreve na classe em que foi chamada o decorators
    descriptor.value = function (...args: Array<any>) {
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} `);
      retorno;
    };

    return descriptor;
  };
}
