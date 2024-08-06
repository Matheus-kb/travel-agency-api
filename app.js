import express from 'express'
import cors from "cors"
import routes from './routes.js'

import { sequelize } from './databases/conecta.js'
import { Destino } from './models/Destino.js'
import { Cliente } from './models/Cliente.js'
import { Excursao } from './models/Excursao.js'
import { Reserva } from './models/Reserva.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    await Destino.sync()
    await Cliente.sync()
    await Excursao.sync()
    await Reserva.sync()
    console.log("Ok! Tabelas Destino, Cliente, Excursao e Reserva sincronizadas com sucesso")
//    await Reserva.sync();  // cria a tabela no banco (a partir dos modelos - se não existirem)
//    await Reserva.sync({alter: true});  // Verifica se há alterações e atualiza as tabelas se houver
//    await Reserva.sync({force: true});  // recria as tabelas, mesmo se já existirem
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API Agência de Turismo')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})