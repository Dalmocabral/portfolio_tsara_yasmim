# ✦ Tsara Manouche Yasmin — Portfólio Oficial

[![React](https://img.shields.io/badge/React-19.3-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![Google Analytics](https://img.shields.io/badge/Google%20Analytics-G--V2FF5WHQ8D-E37400?style=for-the-badge&logo=google-analytics)](https://analytics.google.com/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-4bc0c0?style=for-the-badge)](https://oxc.rs/)

> Website institucional e portfólio oficial da **Tsara Manouche Yasmin**, espaço dedicado à espiritualidade, ao autoconhecimento e à preservação da ancestralidade e cultura do povo cigano, liderado pela orientadora e sacerdotisa **Aretha Equiavone Costa**.

---

## 📖 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Arquitetura & Tecnologias](#-arquitetura--tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar Localmente](#-como-executar-localmente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [SEO & Motores de Busca](#-seo--motores-de-busca)
- [Guia de Deploy na Vercel](#-guia-de-deploy-na-vercel)
- [Configuração de Domínio Próprio](#-configuração-de-domínio-próprio)
- [Contato Oficial](#-contato-oficial)

---

## 🔮 Visão Geral

O projeto foi construído para apresentar de forma elegante, acolhedora e responsiva os atendimentos e cursos da **Tsara Manouche Yasmin**:
- **Consultas com Baralho Cigano (Petit Lenormand), Outros Oráculos e Numerologia**: Online por videochamada ou presencial no Rio de Janeiro.
- **Mapa Numerológico Cabalístico**: Decodificação sagrada de nome e data de nascimento.
- **Cursos & Vivências**: Cursos de Baralho Cigano (Petit Lenormand), atividades de evolução espiritual presenciais e Cursos de Magia Cigana (presencial e online).
- **Reconhecimento Oficial**: Homenagem da Câmara Municipal do Rio de Janeiro através de *Moção de Louvor, Congratulações e Aplausos*.

---

## ✨ Funcionalidades

1. **Hero com Transição Suave**:
   - Alternância elegante entre as cartas do *Baralho Cigano Petit Lenormand* e os números sagrados do *Mapa Numerológico Cabalístico*.
   - Indicadores minimalistas em pontos (*dots*), sem poluição visual.
   - Pausa automática ao passar o mouse e controle por clique.

2. **Seção "Sobre a Tsara Manouche Yasmin"**:
   - História e valores da tradição cigana.
   - Exibição da *Moção de Louvor da Câmara Municipal do Rio de Janeiro* com ampliação interativa (*lightbox*).

3. **Perfil da Orientadora — Aretha Equiavone Costa**:
   - Biografia oficial destacando seus mais de 10 anos de sacerdócio, ética, acolhimento e compromisso ancestral.
   - Foto oficial com visualização em alta resolução.
   - Selos de valor: *Atendimento Humanizado*, *Ética & Sigilo*, *Tradição Ancestral* e *Formação Registrada*.

4. **Grade de Cursos & Certificações Registradas**:
   - Cartões com informações sobre carga horária, instituição e chaves de registro (RDA Biblioteca Nacional e ABRATH).
   - Modal lightbox para leitura nítida de cada certificado em tela cheia.

5. **Depoimentos & Avaliações**:
   - Integração visual com avaliações 5.0 estrelas padrão Google Meu Negócio.

6. **Atendimento Exclusivo via WhatsApp**:
   - Canal único e oficial: `(21) 96639-7864`.
   - Botão flutuante fixo no canto inferior com mensagem personalizada pronta para envio.
   - Links diretos com protocolo `wa.me`.

7. **Favicon Exclusivo & Identidade Visual**:
   - Ícone vetorial SVG com a *Roda Cigana Sagrada* de 16 raios e a *Estrela de 8 Pontas em Ouro Nobre*.
   - Paleta de cores em pergaminho quente (`#EDEBE5`), dourado solar (`#B89A64`) e carvão místico (`#1C1A17`).

---

## 🛠️ Arquitetura & Tecnologias

- **Front-end**: [React 19](https://react.dev/) (Hooks, State Management, Acessibilidade ARIA).
- **Build Tool**: [Vite 8](https://vitejs.dev/) (Build ultrarrápido com Rolldown/ESM).
- **Estilização**: CSS3 Moderno (Custom Properties, Flexbox, Grid, Animações Suaves, `@media` responsivo para Mobile, Tablet e Desktop).
- **Linter & Qualidade**: [Oxlint](https://oxc.rs/) (Zero warnings, zero errors).
- **Analytics**: Google Tag Manager / Google Analytics 4 (`G-V2FF5WHQ8D`).

---

## 📁 Estrutura do Projeto

```text
portfolio_tsara_yasmim/
└── websitetsara/
    ├── public/
    │   ├── favicon.svg             # Ícone oficial da Tsara (Roda & Estrela Cigana)
    │   ├── manifest.webmanifest    # Manifesto para PWA e atalho mobile
    │   ├── robots.txt              # Instruções para robôs de busca (Googlebot, etc.)
    │   ├── sitemap.xml             # Mapa do site com as seções principais
    │   ├── about-tsara.jpg         # Imagem da Moção de Louvor oficial
    │   ├── orientadora.jpg         # Foto oficial de Aretha Equiavone Costa
    │   └── certificado-1 a 4.jpg   # Certificados registrados
    ├── src/
    │   ├── assets/
    │   │   ├── hero-cards.png          # Cartas Petit Lenormand (O Cão, O Navio, O Trevo)
    │   │   ├── numerologia-cards.png   # Ilustração mística dos números sagrados
    │   │   └── tarot-light-bg.png      # Marca d'água sutil de fundo
    │   ├── components/
    │   │   └── Navbar.jsx              # Barra de navegação com scrollspy automático
    │   ├── App.jsx                     # Componente principal estruturando todas as seções
    │   ├── App.css                     # Estilos gerais, tipografia nobre e temas
    │   ├── index.css                   # Reset e variáveis globais de cor
    │   └── main.jsx                    # Ponto de entrada da aplicação
    ├── index.html                      # HTML com Google Analytics, meta tags e SEO
    ├── package.json                    # Dependências e scripts do projeto
    ├── vite.config.js                  # Configuração do Vite e porta do servidor
    └── README.md                       # Documentação completa do projeto
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior instalado.
- Gerenciador de pacotes `npm`.

### Passo a passo
1. Clone o repositório ou navegue até a pasta:
   ```bash
   cd websitetsara
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```text
   http://localhost:5174
   ```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor local de desenvolvimento na porta `5174` |
| `npm run build` | Compila os arquivos para produção na pasta `dist/` |
| `npm run preview` | Executa localmente o bundle final de produção |
| `npm run lint` | Executa o Oxlint para checagem estática de qualidade de código |

---

## 🔍 SEO & Motores de Busca

O site conta com estrutura completa para que o **Googlebot** e outros buscadores indexem e ranqueiem a página:

1. **`robots.txt`** (`public/robots.txt`):
   - Informa aos robôs de busca que todo o conteúdo público do site está liberado para indexação (`Allow: /`).
   - Aponta a localização do mapa do site (`Sitemap`).

2. **`sitemap.xml`** (`public/sitemap.xml`):
   - Lista todas as seções relevantes (Página Inicial, Sobre, Depoimentos, Contatos) com frequência de atualização e prioridade.

3. **Google Analytics 4** (`G-V2FF5WHQ8D`):
   - Tag oficial inserida no `<head>` do `index.html` para monitorar visitantes em tempo real, origens de tráfego e cliques nos botões de WhatsApp.

4. **Meta Tags & OpenGraph**:
   - Título descritivo: `Tsara Manouche Yasmin — Baralho Cigano & Numerologia`.
   - Meta description otimizada com palavras-chave estratégicas.

---

## ☁️ Guia de Deploy na Vercel

A Vercel é a plataforma recomendada para hospedar este projeto.

### Método 1: Conectando com o GitHub (Recomendado)
1. Suba o projeto para um repositório no seu GitHub:
   ```bash
   git add .
   git commit -m "feat: site oficial tsara manouche yasmin"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/portfolio-tsara-yasmim.git
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New... > Project**.
3. Selecione o repositório e clique em **Import**.
4. ⚠️ **Importante**: No campo **Root Directory**, clique em **Edit** e selecione a pasta `websitetsara`.
5. Clique em **Deploy**. O site estará no ar em menos de 1 minuto!

### Método 2: Pelo Terminal com a Vercel CLI
1. No terminal, dentro da pasta `websitetsara`:
   ```bash
   npx vercel
   ```
2. Faça login no navegador quando solicitado e confirme as perguntas com `Enter`.

---

## 🌐 Configuração de Domínio Próprio

Para utilizar um domínio registrado (ex: `tsaramanucheyasmim.com.br` no [Registro.br](https://registro.br)):

1. No painel do projeto na **Vercel**, vá em **Settings > Domains**.
2. Digite seu domínio ou subdomínio (ex: `tsaramanucheyasmim.com.br` e `www.tsaramanucheyasmim.com.br`) e clique em **Add**.
3. Adicione no painel do seu registrador de domínio os registros indicados pela Vercel:
   - **Registro A**: apontando para o IP da Vercel (`76.76.21.21`).
   - **Registro CNAME**: para `www`, apontando para `cname.vercel-dns.com`.
4. O certificado de segurança SSL (HTTPS) é gerado e renovado automaticamente de forma gratuita.

---

## 📞 Contato Oficial

- **Espaço**: Tsara Manouche Yasmin
- **Sacerdotisa & Orientadora**: Aretha Equiavone Costa
- **WhatsApp Oficial**: [(21) 96639-7864](https://wa.me/5521966397864)
- **Modalidades**: Consultas e Cursos Presenciais (Rio de Janeiro) e Online (Brasil e Exterior).

---

© 2026 Tsara Manouche Yasmin. Todos os direitos reservados.

