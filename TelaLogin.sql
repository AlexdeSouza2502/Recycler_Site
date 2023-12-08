-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS telalogin;

-- Usar o banco de dados criado
USE telalogin;

-- Criar tabela para usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
);

