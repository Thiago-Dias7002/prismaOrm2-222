import { buscaUmAlunoRepositorio, buscaTodosAlunosRepositorio, IAluno } from "../Repositorio/AlunosRepositorio";
import { adicionarAluno, buscaAlunoId } from "../Repositorio/AlunosRepositorio";

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

const buscaAlunoIdServico = async (id: number) => {
    try {
        if (id === 0) {
            throw ('Passe um valor para busca')
        }

        const alunos = await buscaAlunoId(id);
        return alunos;
    } catch (erro) {
        throw (erro)
    }
}

const adicionarAlunoServico = async (aluno: IAluno) => {
    const codUsuario = aluno.codUsuario || (aluno as any).cod_usuario;
    const { email, senha, nome, idade } = aluno;

    try {
        if (!codUsuario || !email || !senha || !nome || !idade) {
            throw new Error('Verifique se nenhuma informação está vazia');
        }
        
        const resultado = await adicionarAluno({ ...aluno, codUsuario });
        return resultado;
    } catch(erro) {
        throw(erro);
    }
}

export { buscaTodosAlunosServico, buscaUmAlunoServico, adicionarAlunoServico, buscaAlunoIdServico }