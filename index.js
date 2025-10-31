import express from "express"
import rutas from "./routes/rutas.js"
import conectarBD from "./bd/bd.js"
import path from "path"
import { fileURLToPath } from "url"

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function conexion() {
  await conectarBD()
}
conexion()

// Configuración de EJS con ruta absoluta
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views")) 

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rutas
app.use("/", rutas)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Aplicación en http://localhost:" + PORT)
})
