import {Schema, model} from 'mongoose'


const habitacionesSchema = new Schema({
    nombres: {
        type: String,
        required: true,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        trim: true 
    },
    edad: {
        type: Number,
        required: true
    },
    condicion: {
        type: String,
        required: true
    },
    comidas: {
        type: String,
        required: true,
        trim: true,
        enum: ['Blanda', 'Normal', 'Líquida']

    },
    fechaIngreso: {
        type: Date,
        required: true,
        default: Date.now
    },
    fechaSalida: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

export default model('Habitacion',habitacionesSchema)