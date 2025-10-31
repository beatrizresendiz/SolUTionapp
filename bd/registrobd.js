import Registro from "../models/modelRegistro.js"

export async function nuevoRegistro({correo,matricula}){
	const nuevo = new Registro({correo,matricula})
	const respuestaMongo = await nuevo.save()
	return respuestaMongo
}
export async function mostrarRegistros(){
	const registroBD = await Registro.find()
	return registroBD
}
export async function buscarPorId(id){
	const registroBD = await Registro.findById(id)
	return registroBD
}

export async function editarRegistro({id,correo,matricula}){
	const respuestaMongo =await Registro.findByIdAndUpdate(id,{correo,matricula})
	return respuestaMongo
}

export async function borrarRegistro(id){
	const respuestaMongo = await Registro.findByIdAndDelete(id)
	return respuestaMongo
}

export async function buscarRegistro(matricula){
	const registroBD = await Registro.find({matricula})
	return registroBD
}