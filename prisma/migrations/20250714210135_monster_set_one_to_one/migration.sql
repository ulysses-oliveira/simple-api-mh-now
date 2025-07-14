/*
  Warnings:

  - A unique constraint covering the columns `[monsterId]` on the table `sets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sets_monsterId_key" ON "sets"("monsterId");
