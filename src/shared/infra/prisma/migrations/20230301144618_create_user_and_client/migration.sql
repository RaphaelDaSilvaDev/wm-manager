-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permission" TEXT NOT NULL,
    "avatar" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "addressState" TEXT NOT NULL,
    "addressCity" TEXT NOT NULL,
    "addressStreet" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL,
    "subdomain" TEXT NOT NULL,
    "avatar" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "paymentValue" DOUBLE PRECISION NOT NULL,
    "paymentDate" TEXT NOT NULL,
    "contractorName" TEXT NOT NULL,
    "contractorDocument" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
