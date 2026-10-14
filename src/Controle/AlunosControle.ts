import { Request, Response} from "express";
import { adicionarAlunoServico, buscaTodosAlunosServico, buscaUmAlunoServico } from "../Servico/AlunosServico";
import { IAluno } from "../Repositorio/AlunosRepositorio";

const buscaTodosAlunos = async (req: Request, res: Response) => {
    try {
        const alunos = await buscaTodosAlunosServico();
        res.status(200).json(alunos);
    } catch(erro) {
        res.status(500).json({ error:"Erro ao consultar todos os Alunos"})
    }
}

const buscaUmAluno = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const aluno = await buscaUmAlunoServico(Number(id));

        if (!aluno) {
            return res.status(404).json({ error: "Aluno não encontrado" });
        }

        return res.status(200).json(aluno);
    } catch (erro) {
        return res.status(500).json({ error: "Erro ao consultar o aluno" });
    }
}

const adicionarAlunoControle = async (req: Request, res: Response) => {
    const alunoRequest: IAluno = req.body;
    try {
        const aluno = await adicionarAlunoServico(alunoRequest);
        return res.status(201).json({
            'sucesso': aluno.id > 0,
            'mensagem': 'Aluno Adicionado com Sucesso',
            'idAluno': aluno.id
        })
    } catch (error){
        return res.status(500).json({
            'sucesso': false,
            'mensagem': 'Falha ao adicionar o aluno',
            'idAluno': null
        })
    }
}

export { buscaTodosAlunos, buscaUmAluno, adicionarAlunoControle }