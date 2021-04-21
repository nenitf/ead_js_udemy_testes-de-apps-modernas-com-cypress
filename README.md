# ead_js_udemy_testes-de-apps-modernas-com-cypress

> Projeto referente a [este](https://www.udemy.com/course/testes-cypress/) curso.

## Setup inicial

```sh
npm i
```

## Execução dos testes

```sh
npm run cy:open
```

### Servidor

- Baixei os arquivos html da parte inicial do curso, para poder testar sem depender do servidor do instrutor. Disponibilizo localhost usando php com ``php -S localhost:2222`` dentro de `site_conceitos`

## Resumos sobre o curso

### Níveis

- Funcional: Caixa preta, simulando usuário final
    - Mais completo, porém mais difícil e lento de configurar e debugar
- Serviço: Caixa preta, simula requisições da api do backend
    - Mais focado, porém não garante a camada de apresentação
- Interface: Caixa branca, mocka requisições ao backend
    - Maior controle do teste, porém por ser tão controlado não garante 100% a integração da aplicação

