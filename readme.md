#  Axion - Projeto Processo Seletivo

Este projeto foi desenvolvido como parte de um processo seletivo. Consiste em uma aplicação construída com Next.js e um backend Strapi para gerenciar os dados.

## 🚀 Como Rodar na sua Máquina

**Pré-requisitos:**
- Certifique-se de que possui instalado na sua máquina:
    - Node.js (Eu utilizei a versão v20.12.1, mas versões LTS mais recentes como v18.x ou v20.x devem funcionar)
    - Git
    - Uma ide como VSCode


### ⚙️ `Back-end - API Strapi (axion-test)`

1.  **Descompacte** a pasta zipada `axion-test.zip`.
2.  Abra um terminal e navegue até a pasta `axion-test` descompactada.
3.  Rode os seguintes comandos:

    3.1. Instalar dependências:
    ```bash
    npm install
    ```

    3.2. Build do projeto Strapi:
    ```bash
    npm run build
    ```

    3.3. Executar aplicação em modo de desenvolvimento:
    ```bash
    npm run develop
    ```
    Se tudo der certo, a API Strapi estará rodando em `http://localhost:1337`. O banco de dados SQLite (`.tmp/data.db`) já está incluído com os dados e o usuário de teste.

    **Usuário de Teste para Login no Frontend:**
    * **Email/Usuário:** `teste@email.com` (ou o que você criou)
    * **Senha:** `Senha123` (ou a que você criou)


### 🖥️ `Front-end - Next.js (orange-app)`

1.  Clone este repositório ou navegue até a pasta *orange-app*.
2.  Crie um arquivo chamado `.env.local` na raiz do projeto Next.js e adicione a seguinte linha:
    ```
    NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
    ```
3.  Abra um terminal na pasta do projeto Next.js.
4.  Instale as dependências (utilizei Node v20):
    ```bash
    npm install
    ```
5.  Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    *(Observação: Se houver algum problema estranho ao iniciar, às vezes excluir a pasta `.next` e rodar `npm run dev` novamente pode ajudar a limpar o cache de build, aconteceu bastante cmg).*

O frontend estará  em `http://localhost:3000`.


## 🛠️ Ferramentas Utilizadas
- Strapi (v3.6.8) + Node.js -> Back-end (criação de collections, população de dados e configuração)
- SQLite -> Banco de Dados (embutido no Strapi para desenvolvimento)
- React + Next.js -> Front-end
- Insomnia -> Testes de API
- Git & GitHub -> Versionamento
- Miro -> Organização e Planejamento
- VSCode -> IDE

## 📚 Documentação Criada para Desenvolvimento Ágil
> Clique no tópico que deseja ver os detalhes para acessar a documentação (os links abaixo são exemplos, aponte para seus arquivos reais se os tiver no repositório).

1. [Planejamento de *tasks* a serem realizadas dentro do tempo](./docs-backlog/tasks-plan.md)
2. [Requisitos levantados com priorização](./docs-backlog/requisitos.md)
3. [Quadro Kanban](./docs-backlog/kanban.md)
4. [Testes p/ garantir funcionamento da API](./docs-backlog/testes.md)

## ✨ Melhorias Adicionadas
- Documentação da API com exemplos de uso no Insomnia.
- Validações dos campos no Strapi (max length e required).
- Função de sair/logout.
- Ordenação alfabética (A-Z, Z-A, Padrão) dos itens das listas.
- Design responsivo e fidelidade ao layout proposto.
- Reutilização de código no frontend (components).

## 📖 Alguns dos Materiais Usados para Aprender e Implementar
- [Tutoriais sobre Next.js e React](https://youtu.be/843nec-IvW0?si=IAPeofgs5VtbC2Py)
- [Documentação Oficial do Next.js](https://nextjs.org/docs/app/getting-started)
- [Documentação Oficial do Strapi v3](https://docs-v3.strapi.io/)
- [Artigo sobre Mostrar/Ocultar Senha em React](https://everythingcs.dev/blog/show-and-hide-password-next-js-react-js/)


Feito com ❤️ por Matheus Madureira
