import {
    IAluno, 
    buscaTodosAlunosRepositorio, 
    adicionarAluno, 
    buscaAlunoId, 
    editarAluno,
    deleteAluno,
    buscaAlunosLogin,
} from "../Repositorio/AlunosRepositorio";

interface ILoginAluno {
    usuario: string,
    senha: string
}

const loginAluno = async (data: ILoginAluno) => {
    try {
        const {usuario, senha} = data;
        const aluno = await buscaAlunosLogin(usuario, usuario);

        if (aluno?.senha !== senha) {
            throw('Usuário ou senha Invalidos')
        }
        return aluno.id;

    } catch (error) {
        throw (error)
    }
}

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

const editarAlunoServico = async (id: number, aluno: IAluno) => {
    const {
        codUsuario,
        email,
        senha,
        nome,
        idade
    } = aluno;

    try {
        if (id === 0) {
            throw ('Passe um valor para edição do aluno')
        }

        const existeAluno = await buscaAlunoId(id);
        if (!existeAluno) {
            throw('Aluno não encontrado.');
        }

        if (codUsuario === null ||
            email === null ||
            senha === null ||
            nome === null ||
            idade === null) {
                throw ('Verifique se nenhuma informação está vazia')
            }
        const resultado = await editarAluno(id, aluno);
        return resultado;
    } catch (erro) {
        throw(erro)
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

export { 
    ILoginAluno,
    buscaTodosAlunosServico,
    adicionarAlunoServico,
    buscaAlunoIdServico,
    deleteAlunoServico,
    editarAlunoServico,
    loginAluno,
}