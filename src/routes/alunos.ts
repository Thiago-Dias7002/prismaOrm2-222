import { Router, Request, Response } from "express";
import { prisma } from "../prisma";

import { adicionarAlunoControle, buscaTodosAlunos, buscaUmAluno } from "../Controle/AlunosControle";

const router = Router();

router.get("/", buscaTodosAlunos);

router.get("/:id", buscaUmAluno);

router.post("/", adicionarAlunoControle);

/*
router.get("/", async (req: Request, res: Response) => {
    const alunos = await prisma.alunos.findMany();
    res.status(200).json(alunos);
});
*/
/*
router.post("/", async (req: Request, res: Response) => {
    const {
        nome,
        email,
        idade
    } = req.body;

    const aluno = await prisma.alunos.create({
        data: { 
            nome,
            email,
            idade
        }
    });

    res.status(201).json(aluno);
});
*/

router.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    const aluno = await prisma.alunos.update({
        where: { id: Number(id) },
        data: { 
            nome: nome,
            email: email,
            idade: idade
        },
    });

    res.json(aluno);
});

router.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const aluno = await prisma.alunos.delete({
        where: { id: Number(id) },
    });

    res.json(aluno);
});


export default router;