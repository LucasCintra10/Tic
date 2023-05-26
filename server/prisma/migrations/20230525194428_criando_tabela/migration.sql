-- CreateTable
CREATE TABLE "patrimonios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "dataEntrada" DATETIME NOT NULL,
    "estado" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "localizacao" TEXT NOT NULL
);
