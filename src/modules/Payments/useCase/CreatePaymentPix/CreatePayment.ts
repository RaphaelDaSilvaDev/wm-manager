//@ts-ignore
import Gerencianet from "gn-api-sdk-node";
import fs from "fs";
import path from "path";

interface Props {
  clientDocument: string;
  clientName: string;
  price: number;
  expiresSeconds: number;
}

export async function CreatePaymentPix({ clientDocument, clientName, price, expiresSeconds }: Props) {
  const certPath = path.resolve(__dirname, "../../../../certs/" + process.env.CERT_NAME);
  const options = {
    // PRODUÇÃO = false
    // HOMOLOGAÇÃO = true
    sandbox: true,
    client_id: process.env.EFI_CLIENT_ID,
    client_secret: process.env.EFI_KEY,
    certificate: certPath
  };

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
    chave: "SUACHAVEPIX" // Informe sua chave Pix cadastrada na gerencianet
  };

  const charge = await gerencianet.pixCreateImmediateCharge([], body);
  const request = await GenereteQRCode(charge.loc.id, gerencianet);
  return request;
}

async function GenereteQRCode(id: string, gerencianet: any) {
  let params = {
    id: id
  };

  const response = await gerencianet.pixGenerateQRCode(params);
  return response;
}
