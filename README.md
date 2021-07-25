
## API PIZZARIA

## Descrição e objetivos

 Essa é uma API REST que permite interagir com um arquivo data.json no servidor. O conteúdo simula produtos de uma pizzaria e foi testada usando o Insomnia a partir das requisições HTTP.    


### VOCÊ SABE O QUE SÃO VERBOS HTTP?

- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processados por um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource

* Todas essas requisições estão disponíveis.

### COMO UTILIZAR 

Acesse https://api-rest-pizzaria.herokuapp.com/produtos para visualizar a API

Abra o Insomnia, PostMan ou outro software de sua escolha para testar as seguintes requições HTTP.

1- Insira https://api-rest-pizzaria.herokuapp.com/produtos no campo de URL da plataforma escolhida para retornar as informações de todos os produtos com o verbo GET selecionado.

2- Insira https://api-rest-pizzaria.herokuapp.com/produtos/ + numeroPedido no campo de URL da plataforma escolhida para retornar apenas a informação de apenas um pedido com o verbo GET selecionado.

3- Insira https://api-rest-pizzaria.herokuapp.com/produtos no campo de URL da plataforma escolhida e selecione o formato Json. Depois disso, selecione o verbo POST e insira os novos dados para criar um novo pedido.

4- Insira https://api-rest-pizzaria.herokuapp.com/produtos + numeroPedido no campo de URL da plataforma escolhida e selecione o verbo DELETE para deletar um pedido.

5- Insira https://api-rest-pizzaria.herokuapp.com/produtos + numeroPedido no campo de URL da plataforma esolhida e seleciona o verbo PUT para atualizar os dados.

### COMO REPLICAR ESSE PROJETO

Faça um clone a partir do comando "git clone https://github.com/Jeffersonl22/API-REST-PIZZARIA".
