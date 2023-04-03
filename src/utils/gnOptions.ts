import path from "path";

const certPath = path.resolve("./src/certs/" + process.env.CERT_NAME);

console.log(certPath);

export const options = {
  sandbox: process.env.ENV === "local" ? true : false,
  client_id: process.env.EFI_CLIENT_ID,
  client_secret: process.env.EFI_KEY,
  certificate: certPath
};
