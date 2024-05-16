import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    estudio: { type: String },
    nota: { type: Number },
    duracao: { type: Number }
}, { versionKey: false });

const filme = mongoose.model("filmes", filmeSchema);

export default filme;