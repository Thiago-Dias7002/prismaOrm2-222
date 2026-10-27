import { Router } from "express";

import { 
    buscaTodosAlunos, 
    buscaAlunoIdControle,
    adicionarAlunoControle, 
    deleteAlunoControle,
    editarAlunoControle,
} from "../Controle/AlunosControle";

const router = Router();

router.get("/", buscaTodosAlunos);
router.get("/:id", buscaAlunoIdControle);
router.post("/", adicionarAlunoControle);
router.post("/login", adicionarAlunoControle)
router.put("/:id", editarAlunoControle);
router.delete("/:id", deleteAlunoControle)

export default router;