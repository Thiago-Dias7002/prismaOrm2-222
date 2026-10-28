import { error } from "console";
import {
    IAluno, 
    buscaTodosAlunosRepositorio, 
    adicionarAluno, 
    buscaAlunoId, 
    editarAluno,
    deleteAluno,
    buscaAlunosLogin,
} from "../Repositorio/AlunosRepositorio";
import { gerarToken, hash } from "../Utils/criptografia";

interface ILoginAluno {
    usuario: string,
    senha: string
}

const loginAluno = async (data: ILoginAluno) => {
    try {
        const {usuario, senha} = data;
        const aluno = await buscaAlunosLogin(usuario, usuario);

        if (aluno?.senha !== hash(senha)) {
            throw new Error ('Usuário ou senha Invalidos')
        }

        const token = gerarToken(aluno.id);
        const resultado = {
            "Sucesso": aluno.id > 0,
            "mensagem": 'Login realizado com sucesso',
            "token": token
        }
        return resultado;

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
            throw new Error ('Passe um valor para busca')
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

        const novoAluno: IAluno = {
            idUsuario: aluno.idUsuario,
            codUsuario: aluno.codUsuario,
            email: aluno.email,
            senha: hash(aluno.senha),
            nome: aluno.nome,
            idade: aluno.idade
        }
        
        const resultado = await adicionarAluno(novoAluno);
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
            throw new Error ('Passe um valor para edição do aluno');
        }

        const existeAluno = await buscaAlunoId(id);
        if (!existeAluno) {
            throw new Error ('Aluno não encontrado.');
        }

        if (codUsuario === null ||
            email === null ||
            senha === null ||
            nome === null ||
            idade === null) {
                throw new Error ('Verifique se nenhuma informação está vazia');
            }

        const novoAluno: IAluno = {
            idUsuario: aluno.idUsuario,
            codUsuario: aluno.codUsuario,
            email: aluno.email,
            senha: hash(aluno.senha),
            nome: aluno.nome,
            idade: aluno.idade
        }

        const resultado = await editarAluno(id, novoAluno);
        return resultado;
    } catch (erro) {
        throw(erro)
    }
}


const deleteAlunoServico = async (id: number) => {
    try {
        if (!id || id === 0) {
            throw new Error('Passe um valor para busca');
        }

        const existeAluno = await buscaAlunoId(id);

        if (!existeAluno) {
            throw new Error('Aluno não encontrado');
        }

        const alunos = await deleteAluno(id);
        return alunos;
    } catch (erro) {
        throw erro;
    }
};

export { 
    ILoginAluno,
    buscaTodosAlunosServico,
    adicionarAlunoServico,
    buscaAlunoIdServico,
    deleteAlunoServico,
    editarAlunoServico,
    loginAluno,
}