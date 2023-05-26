/*
  Warnings:

  - You are about to drop the column `categoria` on the `patrimonios` table. All the data in the column will be lost.
  - You are about to drop the column `localizacao` on the `patrimonios` table. All the data in the column will be lost.
  - Added the required column `id_categoria` to the `patrimonios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_localizacao` to the `patrimonios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `patrimonios` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "categorias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "localizacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patrimonios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "dataEntrada" DATETIME NOT NULL,
    "estado" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "id_localizacao" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_patrimonios" ("dataEntrada", "descricao", "estado", "id", "valor") SELECT "dataEntrada", "descricao", "estado", "id", "valor" FROM "patrimonios";
DROP TABLE "patrimonios";
ALTER TABLE "new_patrimonios" RENAME TO "patrimonios";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
