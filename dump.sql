CREATE DATABASE	 biblofile_db;

USE biblofile_db;

CREATE TABLE `user`(
    id_user INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
);

CREATE TABLE post (
	id_post INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255),
    autor VARCHAR(255),
	genero VARCHAR(255),
	paginas INT,
    nota INT,
    tempo INT,
    resenha VARCHAR(500),
    
    id_user INT,
    FOREIGN KEY (id_user)
    REFERENCES `user`(id_user)
);

CREATE TABLE recomendar(
id_recomendar INT PRIMARY KEY AUTO_INCREMENT,

    id_post INT,
    FOREIGN KEY (id_post)
    REFERENCES post(id_post),
    
    id_user INT,
    FOREIGN KEY (id_user)
    REFERENCES `user`(id_user)
);
	
CREATE TABLE `comment` (
	id_comment INT PRIMARY KEY AUTO_INCREMENT,
    message VARCHAR(255),
    
    id_post INT,
    FOREIGN KEY (id_post)
    REFERENCES post(id_post),
    
    
    id_user INT,
    FOREIGN KEY (id_user)
    REFERENCES `user`(id_user)
);

INSERT INTO `user` (nome, email, senha) VALUES 
('Igor Silva', 'igor.silva@email.com', 'senha123'),
('Maria Souza', 'maria.souza@email.com', 'abc12345'),
('Lucas Andrade', 'lucas.andrade@email.com', 'minhasenha'),
('Beatriz Costa', 'beatriz.costa@email.com', 'pass456'),
('Rafael Lima', 'rafael.lima@email.com', '123senha');
