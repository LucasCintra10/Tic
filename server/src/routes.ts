import { prisma } from "./lib/prisma";
import { z } from "zod";
import { FastifyInstance } from "fastify";

export default async function appRoutes(app: FastifyInstance) {
  app.post("/cadastro", async (request) => {
    console.log(request.body);
    const createPatrimonio = z.object({
      placa: z.string(),
      descricao: z.string(),
      categoria: z.number(),
      dataEntrada: z.string().transform((value) => new Date(value)),
      estadoConservacao: z.string(),
      valor: z.number(),
      localizacao: z.number(),
      status: z.string(),
    });

    const {
      placa,
      descricao,
      categoria,
      dataEntrada,
      estadoConservacao,
      valor,
      localizacao,
      status,
    } = createPatrimonio.parse(request.body);

    await prisma.patrimonio.create({
      data: {
        placa,
        descricao,
        dataEntrada,
        estado: estadoConservacao,
        valor,
        status,
        id_categoria: categoria,
        id_localizacao: localizacao,
      },
    });
  });
}
