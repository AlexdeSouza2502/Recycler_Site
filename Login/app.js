const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'telalogin'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados');
});

// Rota para o Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    connection.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
        if (error) {
            res.status(500).send({ message: 'Erro no servidor' });
            return;
        }

        if (results.length === 0 || !bcrypt.compareSync(password, results[0].password)) {
            res.status(401).send({ message: 'Credenciais inválidas' });
        } else {
            req.session.user = results[0]; // Salva o usuário na sessão
            res.status(200).send({ message: 'Login bem-sucedido' });
        }
    });
});

// Rota para redirecionar para a página inicial após o login
app.get('/paginaInicial', (req, res) => {
    if (req.session.user) {
        res.send('Página Inicial');
    } else {
        res.redirect('/'); // Redireciona para a página de login
    }
});

// Middleware de Sessão
app.use(session({
    secret: 'seu_segredo_secreto',
    resave: true,
    saveUninitialized: true
}));

// Inicie o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
