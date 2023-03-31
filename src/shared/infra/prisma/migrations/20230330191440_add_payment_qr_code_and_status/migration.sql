-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "paymentQRCode" TEXT,
ADD COLUMN     "paymentQRCodeDueDate" TIMESTAMP(3),
ADD COLUMN     "paymentQRCodePrice" TEXT,
ADD COLUMN     "paymentQRCodeText" TEXT,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
