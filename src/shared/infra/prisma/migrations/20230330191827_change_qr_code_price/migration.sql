/*
  Warnings:

  - The `paymentQRCodePrice` column on the `Payments` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "paymentQRCodePrice",
ADD COLUMN     "paymentQRCodePrice" DOUBLE PRECISION;
