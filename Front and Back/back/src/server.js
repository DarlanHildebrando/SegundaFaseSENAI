const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY



const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'Teste', // Nome da sua database
    password: 'postgre@33', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});


// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());


//Adicionar um usuário ao banco de dados
app.post('/usuarios', async (req, res) => {

    const {Nome, Email, Senha} = req.body;

    const salt = await bcrypt.genSalt(10);
    const HashedPassword = await bcrypt.hash(Senha, salt);

    try{

        const result = await pool.query(

            'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *',
            [Nome, Email, HashedPassword]

        );

        res.status(201).json(result.rows[0]);

    } catch (err) {

      console.error(err.message);
      res.status(500).json( {error: 'Erro ao cadastrar usuário'});


    }
});

//Buscar todos os usuários
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


app.post('/login', async(req, res) => {

    const {Email, Senha} = req.body;

    try{

        const result = await pool.query(

            'SELECT * FROM usuarios WHERE email = $1', [Email]);

        if(result.rows=== 0){

            return res.status(400).json({message: 'Usuário não encontrado'})
    }

    const user = result.rows[0]

    const isPassword = await bcrypt.compare(Senha, user.senha)

    if(!isPassword){

        return res.status(401).json({message: 'Senha incorreta!'})

    }

    const token = jwt.sign({id: user.id, email: user.email}, SECRET_KEY, {expiresIn: '1hr'})

    res.json({message: 'Login bem sucedido!', token})

} catch (err){

    console.error(err.message)
    res.status(500).json({message: 'Erro ao efetuar login!', error: err.message})

}


});

    





app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

