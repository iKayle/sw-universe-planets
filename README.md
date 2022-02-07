# Star Wars - Kayle

Projeto realizado para integrar a api do universo de Star Wars, listando os planetas com filtros usando React para a construção do front-end e Context API e Hooks para controlar os estados globais.
- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
<br />
<br />

## Branches

Essas são as branches disponíveis nesse projeto

| Branch                | Status                |
| --------------------- | --------------------- |
| main                  | updated               |
| develop               | updated with main     |

<br />
<br />

## Installation

Recomendo utilizar o package manager yarn, mas é possível utilizar o npm

```sh
yarn
# or
npm install
```

<br />

# Architecture Patterns

Esses foram os padões estruturais que eu utilizei ao longo desse projeto
<br />
<br />

## Directory Schema

Essa é a estrutura de diretórios dentro da pasta src

- components
- constants
- context
- pages
- services
- typings
- utils

<br />
<br />

## State Management

Essa aplicação utiliza Context API para gerenciamento de estados globais.
Para adicionar um novo conexto ao seu aplicativo, basta criar um seguindo o code style e exportar o ContextProvider e o useContext dentro do seu index de contexto.

<br />
<br />

## Style System

Esta aplicação usa a estrutura TailwindCSS para estilizar seus componentes. O TailwindCSS é um framework CSS de primeira utilidade embalado com classes como flex, pt-4, text-center e rotate-90 que podem ser compostas para construir qualquer design, diretamente em sua marcação.

Eu recomendo que você use o tailwind em seus projetos, pois economiza muito tempo na criação de componentes e layouts para sua aplicação.

Você pode aprender mais sobre essa abordagem e ver todos os seus recursos no [official tailwind website](https://tailwindcss.com)

<br />
<br />

## Package Commands

Abaixo estão descritos todos os comandos disponíveis no arquivo package.json.

```sh
yarn dev # Inicia a aplicação no modo de desenvolvedor.
yarn build # Cria um pacote de compilação e exporta como uma versão estática.
yarn start # Inicia o aplicativo com a versão compilada.
yarn lint # Aplica todas as regras de lint definidas em prettier e eslint.
```

<br />
<br />

## Default Port

Este projeto usa a porta padrão PORT 3000

```sh
127.0.0.1:3000
# or
http://localhost:3000
```

<br />
<br />

## Copyright

MIT License, Free Software

Feito por Kayle ❤️
