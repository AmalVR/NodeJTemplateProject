-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "sourceApplication" TEXT NOT NULL,
    "reIndexingRequired" BOOLEAN NOT NULL,
    "markToDelete" BOOLEAN NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "fileCreatedTime" TIMESTAMP(3) NOT NULL,
    "processingStatus" INTEGER NOT NULL,
    "fileStatus" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Client_fileName_sourceApplication_idx" ON "Client"("fileName", "sourceApplication");
