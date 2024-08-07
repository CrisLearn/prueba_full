import { Schema, model } from 'mongoose';

const adminSchema = new Schema({
  user: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Método para verificar si el password ingresado es el mismo de la BDD
adminSchema.methods.matchPassword = function (password) {
  return password === this.password;
};

export default model('Administrador', adminSchema, 'admins');

