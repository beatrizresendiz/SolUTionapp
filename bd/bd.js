import mongoose from "mongoose"

async function conectarBD() {
	try{
		const conexion = await mongoose.connect("mongodb+srv://batrizresendiz:%40Beatriz29@cluster0.kow6mgn.mongodb.net/?appName=Cluster0")
		//const conexion = mongoose.connect("mongodb://localhost:27017/backed") por si me connecto a mongo en el local
		console.log("Conexion establecida con Mongo Atlas")
	}
	catch(err){
		console.log("Error "+err)
	}
}


export default conectarBD

