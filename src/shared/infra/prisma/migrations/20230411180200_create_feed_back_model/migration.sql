-- CreateTable
CREATE TABLE "FeedBack" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "feedBackText" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FeedBack_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeedBack" ADD CONSTRAINT "FeedBack_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
