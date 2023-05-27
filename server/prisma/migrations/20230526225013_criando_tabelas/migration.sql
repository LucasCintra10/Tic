/*
  Warnings:

  - Added the required column `placa` to the `patrimonios` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patrimonios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "placa" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataEntrada" DATETIME NOT NULL,
    "estado" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_localizacao" INTEGER NOT NULL,
    CONSTRAINT "patrimonios_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "patrimonios_id_localizacao_fkey" FOREIGN KEY ("id_localizacao") REFERENCES "localizacoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_patrimonios" ("dataEntrada", "descricao", "estado", "id", "id_categoria", "id_localizacao", "status", "valor") SELECT "dataEntrada", "descricao", "estado", "id", "id_categoria", "id_localizacao", "status", "valor" FROM "patrimonios";
DROP TABLE "patrimonios";
ALTER TABLE "new_patrimonios" RENAME TO "patrimonios";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
