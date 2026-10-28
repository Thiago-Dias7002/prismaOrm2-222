import { Request, Response } from "express";
import { ILivro } from "../Repositorio/LivrosRepositorio";
import {
    adicionarLivroServico,
    buscaTodosLivrosServico,
    buscaLivroIdServico,
    deleteLivroServico,
    editarLivroServico
} from "../Servico/LivrosServico";

const buscaTodosLivros = async (req: Request, res: Response) => {
    try {
        const livros = await buscaTodosLivrosServico();
        return res.status(200).json(livros);
    } catch (erro) {
        return res.status(500).json({ error: "Erro ao consultar todos os Livros." });
    }
};

const buscaLivroIdControle = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const livro = await buscaLivroIdServico(Number(id));
        return res.status(200).json({
            'sucesso': true,
            'mensagem': 'Livro encontrado com sucesso.',
            'Livro': livro
        });
    } catch (erro) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao consultar o Livro.',
            'Livro': null
        });
    }
};

const adicionarLivroControle = async (req: Request, res: Response) => {
    const livroRequest: ILivro = req.body;
    try {
        const livro = await adicionarLivroServico(livroRequest);
        return res.status(201).json({
            'sucesso': livro.id > 0,
            'mensagem': 'Livro Adicionado com Sucesso.',
            'idLivro': livro.id
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Falha ao adicionar o livro.',
            'idLivro': null
        });
    }
};

const editarLivroControle = async (req: Request, res: Response) => {
    const livroRequest: ILivro = req.body;
    const { id } = req.params;
    try {
        const livro = await editarLivroServico(Number(id), livroRequest);
        return res.status(201).json({
            'sucesso': livro.id > 0,
            'mensagem': 'Livro atualizado com Sucesso.',
            'idLivro': livro.id
        });
    } catch (error) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Falha ao atualizar o livro.',
            'idLivro': null
        });
    }
};

const deleteLivroControle = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const livro = await deleteLivroServico(Number(id));
        return res.status(200).json({
            'sucesso': true,
            'mensagem': 'Livro Excluído com Sucesso.',
            'Livro': livro
        });
    } catch (erro) {
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Erro ao Excluir o livro.',
            'Livro': null
        });
    }
};

export {
    buscaTodosLivros,
    adicionarLivroControle,
    buscaLivroIdControle,
    deleteLivroControle,
    editarLivroControle
};
