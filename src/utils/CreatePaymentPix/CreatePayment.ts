//@ts-ignore
import Gerencianet from "gn-api-sdk-node";
import { options } from "../gnOptions";

interface Props {
  clientDocument: string;
  clientName: string;
  price: number;
  expiresSeconds: number;
}

export async function CreatePaymentPix({ clientDocument, clientName, price, expiresSeconds }: Props) {
  const gerencianet = new Gerencianet(options);

  let body = {
    calendario: {
      expiracao: expiresSeconds
    },
    devedor: {
      cpf: clientDocument.replace(/\D/g, ""),
      nome: clientName
    },
    valor: {
      original: price.toFixed(2)
    },
    chave: process.env.PIX_KEY
  };

  const charge = await gerencianet
    .pixCreateImmediateCharge([], body)
    .then((response: any) => {})
    .catch((response: any) => console.log(response));
  const request = await GenereteQRCode(charge.loc.id, gerencianet);

  const objctToRerturn = {
    charge,
    request
  };
  return objctToRerturn;
}

async function GenereteQRCode(id: string, gerencianet: any) {
  let params = {
    id: id
  };

  const response = await gerencianet.pixGenerateQRCode(params);
  return response;
}
