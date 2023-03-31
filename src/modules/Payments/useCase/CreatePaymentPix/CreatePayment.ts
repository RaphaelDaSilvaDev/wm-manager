//@ts-ignore
import Gerencianet from "gn-api-sdk-node";
import fs from "fs";
import path from "path";
import { response } from "express";

interface Props {
  clientDocument: string;
  clientName: string;
  price: number;
  expiresSeconds: number;
}

export async function CreatePaymentPix({ clientDocument, clientName, price, expiresSeconds }: Props) {
  const certPath = path.resolve(__dirname, "../../../../certs/" + process.env.CERT_NAME);
  console.log(certPath);
  const options = {
    // PRODUÇÃO = false
    // HOMOLOGAÇÃO = true
    sandbox: process.env.ENV === "local" ? true : false,
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
    chave: "03319c51-6704-4d56-8b14-97eabd9efe0f" // Informe sua chave Pix cadastrada na gerencianet
  };

  const charge = await gerencianet.pixCreateImmediateCharge([], body);
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
