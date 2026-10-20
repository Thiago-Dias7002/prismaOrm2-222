import {
    IAluno, 
    buscaTodosAlunosRepositorio, 
    adicionarAluno, 
    buscaAlunoId, 
    deleteAluno 
} from "../Repositorio/AlunosRepositorio";
    
const buscaTodosAlunosServico = async () => {
    const alunos = await buscaTodosAlunosRepositorio();
    return alunos;
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

const deleteAlunoServico = async (id: number) => {
    try {
        if (id === 0) {
            throw ('Passe um valor para busca')
        }

        const existeAluno = buscaAlunoId(id);

        if (!existeAluno) {
            throw ('Aluno não encontrado')
        }

        const alunos = await deleteAluno(id);
        return alunos;
    } catch (erro) {
        throw (erro)
    }
}

export { buscaTodosAlunosServico, adicionarAlunoServico, buscaAlunoIdServico, deleteAlunoServico }