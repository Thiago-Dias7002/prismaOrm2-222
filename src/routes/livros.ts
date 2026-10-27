import { Router } from "express";

import {
    buscaTodosLivros,
    buscaLivroIdControle,
    adicionarLivroControle,
    editarLivroControle,
    deleteLivroControle
} from "../Controle/LivrosControle";

const router = Router();

router.get("/", buscaTodosLivros);
router.get("/:id", buscaLivroIdControle);
router.post("/", adicionarLivroControle);
router.put("/:id", editarLivroControle);
router.delete("/:id", deleteLivroControle);

export default router;
