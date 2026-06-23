# Resenha da Copa

## Descrição do Projeto

O Resenha da Copa permite cadastrar jogadores da Copa do Mundo, visualizar os jogadores cadastrados e realizar avaliações com notas e comentários.

O objetivo é gerarinterações com os comentários das avaliações.

## Funcionalidades

### Cadastro de Jogadores

O aplicativo permite cadastrar jogadores informando:

Nome do jogador, Seleção, Posição, Número da camisa

Todos eles são obrigatórios, se não preencher um campo o sistema exibi uma mensagem de erro.

### Lista de Jogadores

Os jogadores cadastrados são exibidos em uma FlatList.

Cada jogador possui:

Nome, Seleção, Posição, Número da camisa, Botão para remoção

Quando aperta o botão remove na hora.

### Avaliações

Os usuários podem avaliar jogadores cadastrados através de:

Nome do jogador, Nota de 1 a 5, Comentário

As avaliações ficam visíveis pra todos os usuários (tive como referencia o google play) a parte das estrelas eu pedi pro chat gpt fazer
porque achei que ia ser perfeito mas não sabia como fazer.

## Como Executar o Projeto

### Instalar dependências

npm install

### Iniciar o projeto

npx expo start

## Estrutura do Projeto

src
│
├── Context
│   └── Copa.js
│
├── navegacao
│   └── Tab.js
│
└── telas
    ├── Cadastro.js
    ├── Lista.js
    └── Avaliar_jogador_resenha.js

# Estudo sobre useEffect

## O que é o useEffect e qual seu papel no ciclo de vida de um componente?

O useEffect é um Hook do React utilizado para executar efeitos colaterais em componentes funcionais.

Ele permite realizar ações como:
Buscar dados de APIs, atualizar informações na tela, monitorar alterações em estados, executar códigos após a renderização do componente

No projeto, o useEffect foi utilizado para acompanhar alterações na lista de jogadores cadastrados.

useEffect(() => {
  console.log(
    'Jogadores cadastrados:',
    jogadores.length
  );
}, [jogadores]);

## Como funciona o array de dependências?

O array de dependências define quando o useEffect será executado.

### Sem array

useEffect(() => {
  console.log('Executa sempre');
});
O hook roda toda vez que o componente sofre qualquer alteração ou re-renderização.
### Com dependência

useEffect(() => {
  console.log('Executa quando jogadores mudar');
}, [jogadores]);

O hook roda sempre que um desses valores sofrer alteração

### Array vazio

useEffect(() => {
  console.log('Executa apenas uma vez');
}, []);

O hook roda apenas uma vez, quando o componente é montado na tela (frequentemente usado para buscar dados iniciais).

