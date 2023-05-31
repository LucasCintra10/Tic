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

  app.get("/consulta", async (request) => {
    const patrimonios = prisma.$queryRaw`
    SELECT P.id, P.placa, P.descricao, P.dataEntrada, P.estado, P.valor, P.status, C.nm_categoria, L.nm_sala, P.id_categoria, P.id_localizacao 
    FROM patrimonios P
    INNER JOIN categorias C ON P.id_categoria = C.id
    INNER JOIN localizacoes L ON P.id_localizacao = L.id
    `;
    return patrimonios;
  });

  app.get("/consulta/categoria", async (request) => {
    const categorias = prisma.categoria.findMany();
    return categorias;
  });

  app.get("/consulta/localizacao", async (request) => {
    const localizacoes = prisma.localizacao.findMany();
    return localizacoes;
  });

  app.patch("/atualizar", async (request) => {
    const updatePatrimonio = z.object({
      id: z.number(),
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
      id,
      placa,
      descricao,
      categoria,
      dataEntrada,
      estadoConservacao,
      valor,
      localizacao,
      status,
    } = updatePatrimonio.parse(request.body);

     await prisma.patrimonio.update({
      where: {
        id: id,
      },
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

  app.delete("/deletar/:id", async (request) => {
    const deletarPatrimonio = z.object({
      id: z.string().transform((value) => parseInt(value))
    })
    
    const { id } = deletarPatrimonio.parse(request.params)
    console.log(id)
    

      await prisma.patrimonio.delete({
      where: {
        id: id
      }
    })

    
  })
}
