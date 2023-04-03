//@ts-ignore
import Gerencianet from "gn-api-sdk-node";
import { options } from "../gnOptions";

interface Props {
  e2eId: string;
  id: string;
  value: number;
}

export async function CreateRefound({ e2eId, id, value }: Props) {
  const gerencianet = new Gerencianet(options);

  let body = {
    valor: value.toFixed(2)
  };

  let params = {
    e2eId: e2eId,
    id: id
  };

  gerencianet
    .pixDevolution(params, body)
    .then((resposta: any) => {
      console.log(resposta);
    })
    .catch((error: any) => {
      console.log(error);
    });
  return;
}
