export interface IAddPixToPayment {
  paymentQRCode: string;
  paymentQRCodeText: string;
  paymentQRCodePrice: number;
  paymentQRCodeDueDate: Date;
  paymentTxId: string;
  status: string;
}
