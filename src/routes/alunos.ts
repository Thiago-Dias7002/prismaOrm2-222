import { Router } from "express";

import { 
    buscaTodosAlunos, 
    buscaAlunoIdControle,
    adicionarAlunoControle, 
    deleteAlunoControle,
    editarAlunoControle,
    loginControle,
} from "../Controle/AlunosControle";

const router = Router();

router.get("/", buscaTodosAlunos);
router.get("/:id", buscaAlunoIdControle);
router.post("/login", loginControle);
router.post("/", adicionarAlunoControle);
router.put("/:id", editarAlunoControle);
router.delete("/:id", deleteAlunoControle);

export default router;