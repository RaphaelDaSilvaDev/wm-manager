export interface IConfirmPayment {
  endToEndId: string;
  txid: string;
  chave: string;
  valor: string;
  horario: string;
  infoPagador: string;
  devolucoes?: Devolution;
}

interface Devolution {
  id: string;
  rtrId: string;
  valor: string;
  horario: {
    solicitacao: string;
  };
  status: string;
}
