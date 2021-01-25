This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Como começar

- Faço o clone do app
- Abra o terminal

```bash
npm run dev
# or
yarn dev
```

Abra o navegador e digite [http://localhost:3000](http://localhost:3000) para ver o resultado

## Desafio

- MVP
  - Catálogo de produtos - Feito usando fetch do [pokemom](https://pokeapi.co/)
  - Carrinho lateral - Feito de forma que ao adicionar o pokemon ele apareça na NavBar a contagem de item idicionado
  - Resumo do carrinho - Ao clicar no carrinho de compra da navbar é direcionado para a pagina de carrinho onde é mostrado o detalhe dos pokemons assim como o quantidade do pokemon que deseja
  - 2 lojas com estilos e tipos diferentes de Pokémon - Para esse cenario eu simulei a troca de cor de layout e de pokemon de acordo com o elemento selecionado na navbar. - Para pokemon de fogo - https://pokeapi.co/api/v2/type/10 - Para pokemon de agua - https://pokeapi.co/api/v2/type/11

## A mais

- Botão de finalizar compra, reiniciando o processo de compra
- Pagina de obrigado ao finalizar compra
- Salvar os dados da compra do usuário localmente para não perdê-las ao atualizar a página
- Criação de "estoque" para limitar a compra de pokemon

## Detalhes do projeto

Projeto inteiro foi feito usando o

- Criado GlobalState usando [useContext](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext)
- Criado as paginas de login e de cadastro
  - Usando o proprio framework do [Next.js](https://nextjs.org/docs)
  - Usando [MongoDB](https://docs.mongodb.com/cloud/) para persistir os dados de cadastro
  - Usando [jwt](https://jwt.io/) para guardar as informações do usuario logado
- Fetch da api do pokemom https://pokeapi.co/
  - Usando as novas funções do [Next.js](https://nextjs.org/docs) que para esse projeto eu escolhi getServerSideProps para fazer o fetch no lado do servidor
  - Não achei nessa api a foto do pokemon - coloquei dentro da pasta public duas fotos para representar os pokemons

## Detalhes do negocio

Regras de nogocio (inventadas por mim rsrs)

- Todos os campos do login e cadastro de usuario devem ser preenchidos
- Em cadastro de usuario
  - Deve conter um email valido
  - As senhas devem ser iguais
- NavBar possui um select/option com as opções de pokemon do tipo agua e fogo
  -pode comprar qualquer pokemon de qualquer tipo
- Ao adicionar ao carrinho
  - Pode aumentar a quantidade dependendo do pokemon em estoque
- A compra so pode ser feita caso tenha feito login
- Ao finalizar a compra e direcionado para pagina dizendo o quanto recebeu de cashback
