# Recibos de Vale Transporte — guia de configuração (sem login)

Este app usa **Firebase (Firestore)** como banco de dados, com **sincronização em tempo real** entre quem estiver com o link aberto, e é hospedado de graça no **GitHub Pages**. Não tem tela de login — quem tiver o link, acessa direto.

Como vocês já têm conta no Google e no GitHub, são só os passos abaixo — uns 10 minutos na primeira vez.

⚠️ **Importante:** como não há login, qualquer pessoa com o link consegue ver e editar os dados (nomes, CPF, valores). Indicado só porque o uso é restrito a vocês 2 e o link não vai ser divulgado. Não publique esse link em lugar público.

---

## Parte 1 — Criar o projeto no Firebase

1. Acesse **https://console.firebase.google.com** e clique em **"Adicionar projeto"**.
2. Dê um nome (ex: `recibos-vt`) e siga o assistente (pode desativar o Google Analytics, não é necessário).
3. Dentro do projeto, vá em **Compilação > Firestore Database** → **"Criar banco de dados"** → escolha a localização **`southamerica-east1` (São Paulo)** → comece em **modo de produção**.
4. Vá na aba **"Regras"** (Rules) do Firestore e substitua todo o conteúdo por:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```

   Isso libera leitura e escrita pra quem acessar o app (sem exigir login, como combinado). Clique em **"Publicar"**.

5. Volte em **Configurações do projeto** (ícone de engrenagem, canto superior esquerdo) → role até **"Seus apps"** → clique no ícone **`</>`** (Web) → dê um nome (ex: `recibos-web`) → **não** marque "Configurar também o Firebase Hosting" → clique em registrar.
6. Vai aparecer um bloco de código com `const firebaseConfig = {...}`. **Copie esses valores.**

---

## Parte 2 — Colar a configuração no projeto

1. Abra o arquivo **`firebase-config.js`** (está nesta mesma pasta).
2. Substitua os valores de exemplo pelos que você copiou no passo 6 acima.
3. Salve o arquivo.

---

## Parte 3 — Publicar no GitHub Pages

1. No GitHub, crie um **novo repositório**. Recomendo deixar como **privado** — assim só quem você convidar como colaborador no GitHub consegue ver o código-fonte (o link do site em si funciona igual, é só uma camada extra de discrição).
2. Suba os arquivos desta pasta para o repositório:
   - `index.html`
   - `firebase-config.js`
   - `README.md` (opcional, é só este guia)

   Pode arrastar os arquivos direto pela interface do GitHub ("Add file" → "Upload files"), sem precisar usar linha de comando.
3. Vá em **Settings** (do repositório) → **Pages** (menu lateral) → em "Source", escolha **"Deploy from a branch"** → branch **`main`**, pasta **`/ (root)`** → **Save**.

   - Se o repositório for privado e o GitHub Pages não aparecer disponível, é porque a conta está no plano gratuito (que só publica Pages de repositórios públicos). Nesse caso, ou deixe o repositório público (o conteúdo do código não expõe seus dados, só a estrutura do app — os dados reais ficam só no Firebase), ou assine o GitHub Pro para Pages privado.
4. Aguarde 1-2 minutos. O GitHub vai mostrar o link, algo como:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`
5. Esse é o link definitivo. Favorite e compartilhe só entre vocês 2.

---

## Como funciona a sincronização

Os dados ficam no Firestore e **atualizam automaticamente na tela das duas pessoas em tempo real** — se uma cadastra uma empresa nova, ela aparece na tela da outra sem precisar recarregar a página.

## Se algo der errado

- **Aparece um aviso vermelho/amarelo no topo do app**: geralmente é problema de conexão ou das Regras do Firestore — confira se colou exatamente a regra da Parte 1, passo 4.
- **Link do GitHub Pages dá página em branco**: confira se os arquivos estão na raiz do repositório (não dentro de uma subpasta), e se `firebase-config.js` foi preenchido corretamente com as chaves certas.
- **Quiser adicionar uma proteção simples no futuro** (sem virar um login completo), dá pra eu adicionar uma senha única compartilhada como camada extra — é só pedir.
