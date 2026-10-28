import { Router } from "express";
import { 
    buscaTodosAlunos, 
    buscaAlunoIdControle,
    adicionarAlunoControle, 
    deleteAlunoControle,
    editarAlunoControle,
    loginControle,
} from "../Controle/AlunosControle";
import { validaToken } from "../Utils/criptografia";

const router = Router();

router.get("/", validaToken, buscaTodosAlunos);
router.get("/:id", validaToken, buscaAlunoIdControle);
router.post("/login", validaToken, loginControle);
router.post("/", validaToken, adicionarAlunoControle);
router.put("/:id", validaToken, editarAlunoControle);
router.delete("/:id", validaToken, deleteAlunoControle);

export default router;