const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'InkluaTicket', // Nome da sua database
    password: 'postgre@33', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});


// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

app.post('/usuarios', async (req, res) => {

    const {Nome, Email, Senha, Endereco, CPF} = req.body;

    try{

        const result = await pool.query(

            'INSERT INTO usuarios (nome, email, senha, endereco, cpf) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [Nome, Email, Senha, Endereco, CPF]

        );

        res.status(201).json(result.rows[0]);

    } catch (err) {

      console.error(err.message);
      res.status(500).json( {error: 'Erro ao cadastrar usuário'});


    }
});

app.get('/usuarios', async (req, res) => {

   

    try{

        const result = await pool.query('SELECT * FROM usuarios');
        
        res.json(result.rows);

    } catch (err) {

        console.error(err.message);
        res.status(500).json( {error: 'Erro ao encontrar usuários'});
  

    }

});

//Buscar usuário por Id

app.get('/usuarios/:id', async (req, res) => {

   
    const { id } = req.params;

    try{

        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1 ', [id]);

        if(result.rows === 0){

            return res.status(404).json({ error: 'Usuario não encontrado!'});

        }
        
        res.json(result.rows[0]);

    } catch (err) {

        console.error(err.message);
        res.status(500).json( {error: 'Erro ao encontrar usuário'});
  

    }

});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

