import express from "express";
import { Sequelize } from 'sequelize';

const app = express();

const HOST = '127.0.0.1'
const PORT ='5000'


app.use(express.json())

app.get('/', (req, res) => {
    res.send('API de produtos funcionando');
})

const sequelize = new Sequelize('postgresql://neondb_owner:npg_NSB9H1hvLklr@ep-aged-sun-a4i0l7h5-pooler.us-east-1.aws.neon.tech/planteidb?sslmode=require&channel_binding=require',
    {
        dialect:'postgres',
        dialectOptions:{
            ssl:{
                require:true
            }
        },
        looggin:true
    }
)

try {
    await sequelize.authenticate()
      console.log('Conectado ao BD com sucesso');
} catch (error) {
    console.log(`Erro ao conectar ao banco: ${error}`);
    
}

app.listen(PORT, () => (
    console.log(`Servidor rodando em http://${HOST}:${PORT}`)
    
))