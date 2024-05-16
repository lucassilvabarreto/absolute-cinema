import filme from "../models/Filme.js";

class FilmeController {

    static async listarFilmes(req, res) {
        try {
            const listaFilmes = await filme.find({});
            res.status(200).json(listaFilmes);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }
    }

    static async listarFilmePorId(req, res) {
        try {
            const id = req.params.id;
            const filmeEncontrado = await filme.findById(id);
            res.status(200).json(filmeEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do filme` })
        }
    }

    static async cadastrarFilme(req, res) {
        try {
            const novoFilme = await filme.create(req.body);
            res.status(201).json({ message: "criado com sucesso", filme: novoFilme });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar filme` });
        }
    }

    static async atualizarFilme(req, res) {
        try {
            const id = req.params.id;
            await filme.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "filme atualizado" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do filme` })
        }
    }

    static async excluirFilme(req, res) {
        try {
            const id = req.params.id;
            await filme.findByIdAndDelete(id);
            res.status(200).json({ message: "filme excluído com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` })
        }
    }

};

export default FilmeController;