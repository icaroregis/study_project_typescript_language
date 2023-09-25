export default class Negociacao {
  //apesar de ser publico ninguém pode alterar porque é apenas leitura.
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number,
  ) {}

  public static criaDe(
    dataString: string,
    quantidadeString: number,
    valorString: number,
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = quantidadeString;
    const valor = valorString;

    return new Negociacao(date, quantidade, valor);
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }
}
