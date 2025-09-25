# Deploy Automático com GitHub Actions

Este repositório foi configurado para realizar o deploy automático de sua aplicação no GitHub Pages utilizando GitHub Actions. Abaixo, explico como o processo foi estruturado.

## Objetivo

O objetivo principal é automatizar o processo de build e deploy da aplicação para o GitHub Pages sempre que houver alterações no repositório. Isso garante que a versão mais recente da aplicação esteja sempre disponível online.

## Estrutura do Workflow

O workflow está dividido em dois jobs principais:

### 1. Build

* **Checkout do código:** Utiliza a ação `actions/checkout@v4` para obter o código mais recente do repositório.
* **Configuração do Node.js:** Configura a versão 18 do Node.js utilizando `actions/setup-node@v4`.
* **Instalação das dependências:** Executa `npm install` para instalar as dependências do projeto.
* **Execução dos testes:** Executa `npm test` para rodar os testes, se configurados.
* **Build da aplicação:** Executa `npm run build` para gerar os arquivos estáticos na pasta `./dist`.

### 2. Deploy

* **Upload dos arquivos de build:** Utiliza a ação `actions/upload-pages-artifact@v3` para empacotar e enviar os arquivos da pasta `./dist` como artefato.
* **Deploy no GitHub Pages:** Utiliza a ação `actions/deploy-pages@v4` para realizar o deploy dos arquivos no GitHub Pages.
* **Notificação do resultado:** Exibe no log do workflow o status do deploy e a URL da página publicada.

## Permissões e Tokens

Para permitir que o workflow realize o deploy no GitHub Pages, é necessário configurar as permissões adequadas:

1. **Configuração do GitHub Pages:** No repositório, vá até **Settings > Pages** e selecione a opção **Deploy from a branch**. Escolha a branch desejada para o deploy.

2. **Configuração do Workflow:** No arquivo do workflow, adicione as permissões necessárias:

   ```yaml
   permissions:
     contents: read
     pages: write
     id-token: write
   ```

   Isso garante que o workflow tenha as permissões necessárias para ler o conteúdo do repositório e realizar o deploy no GitHub Pages.

## Considerações Finais

* O workflow é acionado automaticamente em eventos de `push` e `workflow_dispatch`, permitindo deploys automáticos e manuais.
* As permissões são configuradas para garantir que o workflow tenha acesso adequado aos recursos necessários.
* A estrutura do workflow pode ser adaptada conforme as necessidades do projeto, incluindo etapas adicionais como testes, linting ou notificações.

Para mais informações sobre GitHub Actions e deploy no GitHub Pages, consulte a [documentação oficial](https://docs.github.com/en/actions/deployment/about-deployments/deploying-with-github-actions).

---
