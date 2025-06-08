# Desafio: Filtros & Mixins em Vue.js

Este desafio foca na criação e utilização de filtros e mixins em Vue.js.

## Configuração do Projeto
```
npm install
```

### Compila e recarrega para desenvolvimento (hot-reloads)
```
npm run serve
```

### Compila e minifica para produção
```
npm run build
```

### Executa testes
```
npm run test
```

### Corrige e formata arquivos (lint)
```
npm run lint
```

## Exercícios Propostos em `App.vue`:

1.  **Filtro Local**: Construir um filtro local chamado `espacosPorVirgula` que substitui todos os espaços em uma string por vírgulas.
2.  **Filtro Global**: Construir um filtro global chamado `tamanhoDasPalavras` que recebe uma string e retorna uma nova string onde cada palavra é seguida por seu tamanho entre parênteses. Exemplo: "Pedro é legal" => "Pedro (5) é (1) legal (5)".
3.  **Propriedades Computadas**: Implementar a lógica dos exercícios 1 e 2 utilizando propriedades computadas dentro do componente.
4.  **Mixin**: Compartilhar as propriedades computadas (do exercício 3) entre componentes utilizando um mixin.

## Estrutura do Código:

*   `src/App.vue`: Componente principal onde os exercícios são demonstrados.
*   `src/funcoesMixin.js`: Mixin que contém a lógica para as propriedades computadas e as implementações base dos filtros.
*   `src/main.js`: Ponto de entrada da aplicação, onde filtros globais podem ser registrados.

### Customizar Configuração
Veja a [Referência de Configuração](https://cli.vuejs.org/config/).
