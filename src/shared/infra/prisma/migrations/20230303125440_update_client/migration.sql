/*
  Warnings:

  - You are about to drop the column `database` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `subdomain` on the `Client` table. All the data in the column will be lost.
  - Added the required column `addressDistrict` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cellphoneNumber` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientCode` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socailName` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `paymentDate` on the `Client` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "database",
DROP COLUMN "subdomain",
ADD COLUMN     "addressDistrict" TEXT NOT NULL,
ADD COLUMN     "cellphoneNumber" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "clientCode" INTEGER NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "socailName" TEXT NOT NULL,
DROP COLUMN "paymentDate",
ADD COLUMN     "paymentDate" TIMESTAMP(3) NOT NULL;
