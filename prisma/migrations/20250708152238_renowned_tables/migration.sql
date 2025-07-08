/*
  Warnings:

  - You are about to drop the `Element` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Monster` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MonsterElement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Piece` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PieceSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Set` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Weapon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WeaponSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WeaponType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Element";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Monster";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MonsterElement";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Piece";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PieceSkill";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Set";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Skill";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Weapon";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WeaponSkill";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WeaponType";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "elements" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "monsters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "monster_elements" (
    "monsterId" INTEGER NOT NULL,
    "elementId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    PRIMARY KEY ("monsterId", "elementId"),
    CONSTRAINT "monster_elements_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "monsters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "monster_elements_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "elements" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "monsterId" INTEGER NOT NULL,
    CONSTRAINT "sets_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "monsters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "pieces" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "setId" INTEGER NOT NULL,
    CONSTRAINT "pieces_setId_fkey" FOREIGN KEY ("setId") REFERENCES "sets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "piece_skills" (
    "pieceId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    PRIMARY KEY ("pieceId", "skillId"),
    CONSTRAINT "piece_skills_pieceId_fkey" FOREIGN KEY ("pieceId") REFERENCES "pieces" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "piece_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "weapons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "weaponTypeId" INTEGER NOT NULL,
    "elementId" INTEGER NOT NULL,
    "monsterId" INTEGER NOT NULL,
    CONSTRAINT "weapons_weaponTypeId_fkey" FOREIGN KEY ("weaponTypeId") REFERENCES "weapon_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "weapons_elementId_fkey" FOREIGN KEY ("elementId") REFERENCES "elements" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "weapons_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "monsters" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "weapon_types" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "weapon_skills" (
    "weaponId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    PRIMARY KEY ("weaponId", "skillId"),
    CONSTRAINT "weapon_skills_weaponId_fkey" FOREIGN KEY ("weaponId") REFERENCES "weapons" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "weapon_skills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "skills" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "elements_name_key" ON "elements"("name");

-- CreateIndex
CREATE UNIQUE INDEX "monsters_name_key" ON "monsters"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sets_name_key" ON "sets"("name");

-- CreateIndex
CREATE UNIQUE INDEX "pieces_name_key" ON "pieces"("name");

-- CreateIndex
CREATE UNIQUE INDEX "skills_name_key" ON "skills"("name");

-- CreateIndex
CREATE UNIQUE INDEX "weapons_name_key" ON "weapons"("name");

-- CreateIndex
CREATE UNIQUE INDEX "weapon_types_name_key" ON "weapon_types"("name");
