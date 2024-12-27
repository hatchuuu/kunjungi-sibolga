-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "idThis" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
