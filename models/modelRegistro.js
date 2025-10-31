import mongoose from "mongoose"

const contactoSchema = new mongoose.Schema({
	correo:{
		type:String,
		required:true,
		trim: true,//recortar espacios en las casillas
		unique:false
	},
	matricula:{
		type:Number,
		required:false,
		trim:true,
		unique:false
	}
})

export default mongoose.model("Registro",contactoSchema)

