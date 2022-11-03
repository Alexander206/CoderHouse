import mongoose, { Schema } from "mongoose";

const user = new Schema({
    nombre: { Type: String, required: true },
    apellido: { Type: String, required: true },
    edad: { Type: Number, required: true },
    telefono: { Type: String, required: true, index: true, unique: true },
    correo: { Type: String, required: true, index: true, unique: true },
    estado: { Type: String, default: 'activo', enum: ['activo', 'inactivo'] },
    create_at: { Type: Date, default: Date.now() },
});

export default mongoose.model('user', user);