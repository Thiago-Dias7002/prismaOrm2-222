import { buscaUmAlunoRepositorio ,buscaTodosAlunosRepositorio, IAluno } from "../Repositorio/AlunosRepositorio";
import { adicionarAluno } from "../Repositorio/AlunosRepositorio";


const buscaTodosAlunosServico = async () => {
    const alunos = await buscaTodosAlunosRepositorio();
    return alunos;
}

const buscaUmAlunoServico = async (id: number) => {
    if (!id || Number.isNaN(Number(id))) {
        throw new Error("ID do aluno inválido");
    }

    const aluno = await buscaUmAlunoRepositorio(Number(id));
    return aluno;
}

const adicionarAlunoServico = async (aluno: IAluno) => {
 const {
    codUsuario,
    email,
    senha,
    nome,
    idade
 } = aluno;

 try {
    if (codUsuario === null || email === null || senha === null || nome === null || idade === null) {
        throw ('Verifique se nenhuma informação está vazia')
    }
    const resultado = await adicionarAluno(aluno);
    return resultado;

 } catch(erro) {
    throw(erro);
 }
}

export { buscaTodosAlunosServico, buscaUmAlunoServico, adicionarAlunoServico }