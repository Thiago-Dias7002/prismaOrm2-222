import {
    ILivro,
    buscaTodosLivrosRepositorio,
    adicionarLivro,
    buscaLivroId,
    editarLivro,
    deleteLivro
} from "../Repositorio/LivrosRepositorio";

const buscaTodosLivrosServico = async () => {
    const livros = await buscaTodosLivrosRepositorio();
    return livros;
};

const buscaLivroIdServico = async (id: number) => {
    try {
        if (!id || id === 0) {
            throw new Error('Passe um valor para busca');
        }

        const livro = await buscaLivroId(id);
        if (!livro) {
            throw new Error('Livro não encontrado');
        }
        return livro;
    } catch (erro) {
        throw (erro);
    }
};

const adicionarLivroServico = async (livro: ILivro) => {
    const { titulo, autor, paginas } = livro;

    try {
        if (!titulo || !autor || paginas === undefined || paginas === null) {
            throw new Error('Verifique se nenhuma informação está vazia');
        }

        const resultado = await adicionarLivro(livro);
        return resultado;
    } catch (erro) {
        throw (erro);
    }
};

const editarLivroServico = async (id: number, livro: ILivro) => {
    const { titulo, autor, paginas } = livro;

    try {
        if (!id || id === 0) {
            throw new Error('Passe um valor para edição do livro');
        }

        const existeLivro = await buscaLivroId(id);
        if (!existeLivro) {
            throw new Error('Livro não encontrado.');
        }

        if (!titulo || !autor || paginas === undefined || paginas === null) {
            throw new Error('Verifique se nenhuma informação está vazia');
        }

        const resultado = await editarLivro(id, livro);
        return resultado;
    } catch (erro) {
        throw (erro);
    }
};

const deleteLivroServico = async (id: number) => {
    try {
        if (!id || id === 0) {
            throw new Error('Passe um valor para busca');
        }

        const existeLivro = await buscaLivroId(id);
        if (!existeLivro) {
            throw new Error('Livro não encontrado');
        }

        const livro = await deleteLivro(id);
        return livro;
    } catch (erro) {
        throw (erro);
    }
};

export {
    buscaTodosLivrosServico,
    adicionarLivroServico,
    buscaLivroIdServico,
    deleteLivroServico,
    editarLivroServico
};
