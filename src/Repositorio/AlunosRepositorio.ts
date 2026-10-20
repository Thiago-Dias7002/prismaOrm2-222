import { prisma } from "../prisma";

interface IAluno {
    idUsuario?:     number | null
    nome:           string
    email:          string
    codUsuario:     string
    senha:          string
    idade:          number
    criadoEm?:      Date
}

const buscaTodosAlunosRepositorio = async () => {
    const alunos = await prisma.alunos.findMany();
    return alunos;
}

const buscaUmAlunoRepositorio = async (id: number) => {
    const aluno = await prisma.alunos.findUnique({
        where: { id }
    });

    return aluno;
}

const adicionarAluno = async (data: IAluno) => {
    const aluno = await prisma.alunos.create({
        data: { 
            nome:           data.nome,
            email:          data.email,
            cod_usuario:    data.codUsuario || (data as any).cod_usuario,
            senha:          data.senha,
            idade:          data.idade
        }
    });

    return aluno;
}

const buscaAlunoId = async (id: number) => {
    const aluno = await prisma.alunos.findUnique({
        where: { id },
    });
    return aluno;
}

export {
    buscaUmAlunoRepositorio,
    buscaTodosAlunosRepositorio,
    adicionarAluno,
    buscaAlunoId,
    IAluno
}