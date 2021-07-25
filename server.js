/* 
Descricao :
	Desenvolvimento da API com as requisições para os verbos HTTP
Aluno: Jefferson Silva Lopes  
Data :
	20/07/2021
*/


const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/clients", function(req, res) {
  res.json(data);
});

app.get("/clients/:numeroPedido", function(req, res) {
  const { numeroPedido } = req.params;
  const client = data.find(cli => cli.numeroPedido == numeroPedido);

  if (!client) return res.status(204).json();

  res.json(client);
});

app.post("/clients", function(req, res) {
  const { numeroPedido, descricao, sabor, tamanho, preco, tempoPreparo } = req.body;

  // salvar novo produto

  res.json({ numeroPedido, descricao, sabor, tamanho, preco, tempoPreparo });
});

app.put("/clients/:numeroPedido", function(req, res) {
  const { numeroPedido } = req.params;
  const client = data.find(cli => cli.numeroPedido == numeroPedido);

  if (!client) return res.status(204).json();

  const { sabor } = req.body;

  client.sabor = sabor;

  res.json(client);
});

app.delete("/clients/:numeroPedido", function(req, res) {
  const { numeroPedido } = req.params;
  const clientsFiltered = data.filter(client => client.numeroPedido != numeroPedido);

  res.json(clientsFiltered);
});

app.listen( process.env.PORT || 3000, console.log(""Servidor is up) );
