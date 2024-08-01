import mongoose, {Schema,model} from 'mongoose'


const habitacionSchema = new Schema({
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
        required: true,
        enum: ['Buena', 'Regular', 'Mala']
    },
    comidas: {
        type: String,
        required: true,
        trim: true
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

export default model('Habitacion',habitacionSchema)