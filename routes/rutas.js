import {Router} from "express" 
import {nuevoRegistro, mostrarRegistros,buscarPorId, editarRegistro, borrarRegistro,buscarRegistro}from "../bd/registrobd.js"
const router = Router()

router.get("/",(req,res) => {
	res.render("home")
})
router.get("/info",(req,res)=> { //req-Recibir variables, res-Mandar variables a la pantalla
	res.render("info")
})

router.get("/registro",  (req, res) => {
	res.render("registro")
})
router.post("/registro", async (req, res) => {
	var correo = req.body.correo
	var matricula = req.body.matricula
	console.log("Correo: "+correo+" Matricula: "+matricula)
	const respuestaMongo =await nuevoRegistro(req.body)
	console.log(respuestaMongo)
	res.render("respuesta",{correo, matricula})
})

router.get("/mostrarRegistros", async (req,res) => {
	const registroBD = await mostrarRegistros()
	res.render("mostrarRegistros",{registroBD})
})

router.get("/editar/:id", async (req,res) => {
	const id=req.params.id
	const registroBD=await buscarPorId(id)
	res.render("editarRegistro", {registroBD})
})

router.post("/editarRegistro", async(req,res) =>{
	const respuestaMongo = await editarRegistro(req.body)
	console.log(respuestaMongo)
	res.redirect("/mostrarRegistros")
})

router.get("/borrar/:id", async (req,res) => {
	const id =req.params.id
	const respuestaMongo= await borrarRegistro(id)
	res.redirect("/mostrarRegistros")
})

router.post("/buscarRegistro", async (req,res)=>{
	const matricula = req.body.matricula
	const registroBD = await buscarRegistro(matricula)
	res.render("mostrarRegistros", {registroBD})
})
export default router