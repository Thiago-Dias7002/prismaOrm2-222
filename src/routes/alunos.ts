import { Router, Request, Response } from "express";
import { prisma } from "../prisma";

import { 
    adicionarAlunoControle, 
    buscaTodosAlunos, 
    buscaAlunoIdControle,
    deleteAlunoControle,
    editarAlunoControle,
} from "../Controle/AlunosControle";

const router = Router();

router.post("/login", adicionarAlunoControle)

router.get("/", buscaTodosAlunos);

router.get("/:id", buscaAlunoIdControle);

router.post("/", adicionarAlunoControle);

router.put("/:id", editarAlunoControle);

router.delete("/:id", deleteAlunoControle)

export default router;