import { prisma } from "../prisma";

interface ILivro {
    id?:        number | null;
    titulo:     string;
    autor:      string;
    paginas:    number;
    criadoEm?:  Date;
}

const buscaTodosLivrosRepositorio = async () => {
    const livros = await prisma.livros.findMany();
    return livros;
};

const adicionarLivro = async (data: ILivro) => {
    const livro = await prisma.livros.create({
        data: {
            titulo:  data.titulo,
            autor:   data.autor,
            paginas: Number(data.paginas)
        }
    });

    return livro;
};

const buscaLivroId = async (id: number) => {
    const livro = await prisma.livros.findUnique({
        where: { id }
    });

    return livro;
};

const editarLivro = async (id: number, livro: ILivro) => {
    const livroAtualizado = await prisma.livros.update({
        where: { id },
        data: {
            titulo:  livro.titulo,
            autor:   livro.autor,
            paginas: Number(livro.paginas)
        }
    });
    
    return livroAtualizado;
};

const deleteLivro = async (id: number) => {
    const livro = await prisma.livros.delete({
        where: { id }
    });

    return livro;
};

export {
    ILivro,
    buscaTodosLivrosRepositorio,
    adicionarLivro,
    buscaLivroId,
    editarLivro,
    deleteLivro
};
