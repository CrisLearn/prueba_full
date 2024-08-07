
//Importar mongoose
import mongoose from 'mongoose'


// Pertimitir que solo los campos definidos en el Schema sean almacenados
// enn la BDD
mongoose.set('strictQuery', true)


// Crear una función llamada connection()
const connection = async()=>{
    try {
        // Establecer al conexión con la BDD
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        
        // Presentar la conexión en consola 
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    
    } catch (error) {
        // Capturar Error en la conexión
        console.log(error);
    }
}


//Exportar la función
export default  connection
import mongoose from 'mongoose'

mongoose.set('strictQuery', true)

const connection = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI_LOCAL)
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error);
    }
}

export default  connection