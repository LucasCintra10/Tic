import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.patrimonio.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.localizacao.deleteMany();

  await prisma.categoria.create({
    data: {
      id: 1,
      nome: "Eletrônicos",
    },
  });

  await prisma.localizacao.create({
    data: {
      id: 1,
      nome: "Sala 1",
    },
  });

  await prisma.patrimonio.create({
    data: {
      id: 1,
      descricao: "Computador",
      estado: "Novo",
      dataEntrada: new Date("2023-05-25"),
      id_categoria: 1,
      id_localizacao: 1,
      valor: 1000,
      status: "Ativo",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
