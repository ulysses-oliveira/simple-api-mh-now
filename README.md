# pratica-api

## Tecnologias e Ferramentas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Express**: Framework web para Node.js.
- **ts-node-dev**: Reinicia a aplicação automaticamente em desenvolvimento.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Jest**: Framework de testes automatizados.
- **ESLint**: Linter para análise de código.
- **Prettier**: Formatação automática de código.
- **Prisma**: ORM moderno para banco de dados.

## Como clonar e executar o projeto

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/pratica-api.git
    cd pratica-api
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Configure as variáveis de ambiente:**
    - Copie o arquivo `.env.example` para `.env` e ajuste conforme necessário.

4. **Execute as migrations do Prisma (se aplicável):**
    ```bash
    npx prisma migrate dev
    ```

5. **Inicie o servidor em modo desenvolvimento:**
    ```bash
    npm run dev
    ```

## Como configurar e iniciar

1. **Crie uma nova pasta para o projeto:**
    ```bash
    mkdir pratica-api
    cd pratica-api
    ```

2. **Inicialize o projeto:**
    ```bash
    npm init -y
    ```

3. **Instale as dependências:**
    ```bash
    npm install express dotenv @prisma/client
    npm install --save-dev typescript ts-node-dev jest eslint prettier prisma @types/node @types/express @types/jest
    ```

4. **Configure o TypeScript:**
    ```bash
    npx tsc --init
    ```

4. **Adicione o script de desenvolvimento ao `package.json`:**
    ```json
    "scripts": {
      "dev": "ts-node-dev --inspect=9229 --respawn --transpile-only --ignore node_modules src/server.ts"
    }
    ```

5. **Configure o Prisma:**
    ```bash
    npm install prisma --save-dev
    npm install @prisma/client
    npx prisma init
    ```
    Isso criará a pasta `prisma` com o arquivo `schema.prisma` e o `.env` para configuração do banco de dados.

## Observações

- Certifique-se de criar um arquivo `.env` para as variáveis de ambiente.
- Utilize `npm run dev` para iniciar o servidor em modo desenvolvimento.
- Para rodar os testes, utilize `npx jest`.

## Enviar atualizações para uma nova branch

Use os comandos abaixo para criar uma nova branch, adicionar suas alterações e enviá-las para o repositório remoto:

```bash
git checkout -b nome-da-sua-branch
git add .
git commit -m "Descreva suas alterações"
git push origin nome-da-sua-branch
```
