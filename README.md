# Sneakers - Ecommerce de Tênis (FullStack)

![screencapture-localhost-3000-2024-11-12-09_16_03 (1)](https://github.com/user-attachments/assets/56c41244-acc3-4118-be9d-bcb64322549c)

## Introdução

Sneakers é uma plataforma de ecommerce de tênis. Através dela você consegue conferir as principais novidades do mercado, fazer pesquisas e conferir os detalhes do produto.

## Tecnologias Utilizadas

Para desenvolver o Front-End do projeto, utilizei:
- React JS : framework para desenvolvimento;
- TypeScript;
- Redux: gerenciamento de estados;
- Axios: manipulação de API;
- React Hook Form e Zod: validação de formulários;
- Jest: testes;

Estilos:
- Styled Components: personalização de estilos dos componentes;
  
BackEnd:
- NodeJS e Express: desenvolvimento da API;
- BCrypt: encriptação de dados do usuário;
- JWT: geração e validação de tokens de sessão do usuário;

## Funcionalidades

### Autenticação de autorização do usuário

Feita utilizando NodeJS. O usuário pode se logar e se registrar.

![scrnli_tQzHjBHlTF4Xrk](https://github.com/user-attachments/assets/992314fc-5a2a-4e8d-8010-403fe0af19b0)

### Ver lista de produtos

![scrnli_I34ODyE8qf2k5g](https://github.com/user-attachments/assets/d20bc93c-3ceb-48e3-a6fb-4429ccc0007d)

### Página do produto

![scrnli_CoYEdTfX4F314U](https://github.com/user-attachments/assets/3acf8423-9eb5-4786-a1b4-a395a0377879)


### Adicionar produto ao carrinho

![scrnli_t17d3aLVAf46SP](https://github.com/user-attachments/assets/090b6036-ff80-4e59-b96a-a9e6f7d5e471)

### Adicionar produto à lista de desejos

![scrnli_rd60dvjKNfFi0P](https://github.com/user-attachments/assets/3560b183-e055-4d5a-a1ac-d2265ce12ccd)

### Buscar produto por nome

![scrnli_5L4DR59buF5jmk](https://github.com/user-attachments/assets/fe4bf691-81ef-4312-831a-3269f0ec0444)

## Instalação

1. Primeiro de tudo, é necessário que você tenha instalado o MySQL na sua máquina. Após instalar, vamos configurar o seu banco de dados. No MySQL, insira os seguintes códigos:

```sql
CREATE DATABASE sneakers; -- Criar database

USE sneakers;

CREATE TABLE product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  model VARCHAR(255) NOT NULL,
  p_type VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  promotion INT NOT NULL
); -- Criar tabela product

CREATE TABLE product_photos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  photo_link VARCHAR(255) NOT NULL,
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE
); -- Criar tabela product_photos

-- Popular tabela
INSERT INTO product (brand, category, gender, model, p_type, price, promotion)
VALUES ('Nike', 'Sneakers', 'Unisex', 'Ispa Sense Flyknit', 'Sport', 499.99, 10);
INSERT INTO product_photos (product_id, photo_link)
VALUES (1, 'https://imgnike-a.akamaihd.net/360x360/023624BPA8.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (1, 'https://imgnike-a.akamaihd.net/360x360/023624BPA1.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (1, 'https://imgnike-a.akamaihd.net/360x360/023624BPA2.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (1, 'https://imgnike-a.akamaihd.net/360x360/023624BPA3.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (1, 'https://imgnike-a.akamaihd.net/360x360/023624BPA4.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (1, 'https://imgnike-a.akamaihd.net/360x360/023624BPA5.jpg');

INSERT INTO product (brand, category, gender, model, p_type, price, promotion)
VALUES ('Nike', 'Sneakers', 'Masculino', 'Reverse Duck Camo', 'Sport', 499.99, 15);
INSERT INTO product_photos (product_id, photo_link)
VALUES (2,'https://imgnike-a.akamaihd.net/360x360/011254P1A10.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (2,'https://imgnike-a.akamaihd.net/360x360/011254P1A1.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (2,'https://imgnike-a.akamaihd.net/360x360/011254P1A2.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (2,'https://imgnike-a.akamaihd.net/360x360/011254P1A3.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (2,'https://imgnike-a.akamaihd.net/360x360/011254P1A4.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (2,'https://imgnike-a.akamaihd.net/360x360/011254P1A5.jpg');

INSERT INTO product (brand, category, gender, model, p_type, price, promotion)
VALUES ('Nike', 'Sneakers', 'Masculino', 'Zoom Span 4', 'Sport', 569.99, 0);
INSERT INTO product_photos (product_id, photo_link)
VALUES (3,'https://imgnike-a.akamaihd.net/360x360/012973IFA8.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (3,'https://imgnike-a.akamaihd.net/360x360/012973IFA1.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (3,'https://imgnike-a.akamaihd.net/360x360/012973IFA2.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (3,'https://imgnike-a.akamaihd.net/360x360/012973IFA3.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (3,'https://imgnike-a.akamaihd.net/360x360/012973IFA4.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (3,'https://imgnike-a.akamaihd.net/360x360/012973IFA5.jpg');

INSERT INTO product (brand, category, gender, model, p_type, price, promotion)
VALUES ('Nike', 'Sneakers', 'Feminino', 'Pegasus 39 Shield', 'Sport', 1299.99, 12);
INSERT INTO product_photos (product_id, photo_link)
VALUES (4,'https://imgnike-a.akamaihd.net/360x360/012984IDA8.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (4,'https://imgnike-a.akamaihd.net/360x360/012984IDA1.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (4,'https://imgnike-a.akamaihd.net/360x360/012984IDA2.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (4,'https://imgnike-a.akamaihd.net/360x360/012984IDA3.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (4,'https://imgnike-a.akamaihd.net/360x360/012984IDA4.jpg');
INSERT INTO product_photos (product_id, photo_link)
VALUES (4,'https://imgnike-a.akamaihd.net/360x360/012984IDA5.jpg');

INSERT INTO product (brand, category, gender, model, p_type, price, promotion)
VALUES ('Under Armour', 'Basquete', 'Feminino', ' Curry 3Z7', 'Sport', 699.99, 0);
INSERT INTO product_photos (product_id, photo_link)
VALUES (5,'https://underarmourbr.vtexassets.com/arquivos/ids/319795/3027782-400-01.jpg?v=638252997604230000');
INSERT INTO product_photos (product_id, photo_link)
VALUES (5,'https://underarmourbr.vtexassets.com/arquivos/ids/319796/3027782-400-02.jpg?v=638252997614370000');
INSERT INTO product_photos (product_id, photo_link)
VALUES (5,'https://underarmourbr.vtexassets.com/arquivos/ids/319797/3027782-400-03.jpg?v=638252997624900000');
INSERT INTO product_photos (product_id, photo_link)
VALUES (5,'https://underarmourbr.vtexassets.com/arquivos/ids/319798/3027782-400-04.jpg?v=638252997636500000');
INSERT INTO product_photos (product_id, photo_link)
VALUES (5,'https://underarmourbr.vtexassets.com/arquivos/ids/319799/3027782-400-05.jpg?v=638252997644700000');

INSERT INTO product (brand, category, gender, model, p_type, price, promotion)
VALUES ('Under Armour', 'Treino', 'Feminino', ' TriBase Reign 6', 'Sport', 799.99, 0);
INSERT INTO product_photos (product_id, photo_link)
VALUES (6,'https://underarmourbr.vtexassets.com/arquivos/ids/345931/3027342-500-01.jpg?v=638639278364930000');
INSERT INTO product_photos (product_id, photo_link)
VALUES (6,'https://underarmourbr.vtexassets.com/arquivos/ids/345932/3027342-500-02.jpg?v=638639278448800000');
INSERT INTO product_photos (product_id, photo_link)
VALUES (6,'https://underarmourbr.vtexassets.com/arquivos/ids/345933/3027342-500-03.jpg?v=638639278549600000');
INSERT INTO product_photos (product_id, photo_link)
VALUES (6,'https://underarmourbr.vtexassets.com/arquivos/ids/345934/3027342-500-04.jpg?v=638639278641930000');
INSERT INTO product_photos (product_id, photo_link)
VALUES (6,'https://underarmourbr.vtexassets.com/arquivos/ids/345935/3027342-500-05.jpg?v=638639278744900000');

```


2. Clone o repositório:

```bash
git clone https://github.com/FabioSigF/sneakers
```

3. Instale as dependências:

```bash
cd sneakers/frontend
npm install
cd ../backend
npm install
```

4. Faça a configuração do banco de dados:

No arquivo db.js do backend, substitua a senha e o banco de dados com valores válidos do seu MySQL:
```javascript
import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", //sua senha aqui
  database: "sneakers"
});
```

5. Agora, basta rodar a aplicação. Inicie o Backend e o FrontEnd.
Iniciando o backend da pasta /backend:
```bash
npm run start
```
Iniciando o frontend da pasta /frontend:
```bash
npm start
```
