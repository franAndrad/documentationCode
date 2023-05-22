import mongoose, { Schema } from "mongoose";


const ParrafoSchema = new mongoose.Schema({
  linea: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const SubtituloSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  parrafos: [ParrafoSchema],
});

const TituloSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  subtitulo: [SubtituloSchema],
});

const TemaSchema = new mongoose.Schema({
  titulo: [TituloSchema],
});

const Tema = mongoose.model("Tema", TemaSchema);

module.exports = Tema;

