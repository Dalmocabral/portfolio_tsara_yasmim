# 🔮 Portfólio Místico de Tsara Yasmim | Baralho Cigano & Magia Natural

Um portfólio web de alto padrão para **Tsara Yasmim** (Taróloga e Terapeuta Holística), combinando estética esotérica moderna com uma **Mesa de Baralho Cigano 3D interativa** desenvolvida com **Three.js** (inspirada nos conceitos de design da [ThreeUI](https://threeui.com/)).

---

## ✨ Funcionalidades Principais

* **🎴 Mesa Oracular 3D Interativa (Hero Section)**:
  * Mesa de veludo violeta texturizada com mandalas sagradas e campo de partículas estelares flutuantes.
  * Leque com cartas do Baralho Cigano com verso dourado ornamentado.
  * Efeito de **elevação/levitação no hover** do mouse.
  * Ao clicar, a carta sobe ao centro da tela, faz um **giro 3D de 180°**, ativa faíscas douradas e revela a mensagem e conselho oracular do dia.
  * Botão direto para agendar consulta completa no WhatsApp com mensagem personalizada preenchida automaticamente.
* **🔊 Sistema de Áudio Místico (Web Audio API)**:
  * Efeitos sonoros sutis de taça de cristal / sino tibetano (frequências de 528Hz e 741Hz) ao virar cartas.
  * Trilha ambiente etérea de meditação com botão de controle (Ativar / Silenciar) na barra de navegação.
* **🌿 Quem é Tsara Yasmim (Sobre Mim)**:
  * Foto artística em estúdio esotérico com velas, cristais e baralho cigano.
  * História, conexão com Santa Sara Kali e compromisso com o oráculo terapêutico ético.
  * Badges de credibilidade: Ética e Sigilo, Oráculo Terapêutico, Magia Natural e Acolhimento Real.
* **✨ Serviços & Rituais**:
  * *Consulta Completa de Baralho Cigano* (Destaque - Amor, Finanças, Destino e Mandala Astrológica).
  * *Mesa Radiônica & Harmonização de Chakras*.
  * *Banhos de Ervas & Magia Natural*.
  * *Tiragem Express (3 Perguntas Objetivas no WhatsApp)*.
* **⭐ Depoimentos & Prova Social**:
  * Avaliações com 5 estrelas e relatos reais de consulentes atendidos.
* **❓ Dúvidas Frequentes (FAQ)**:
  * Sanfona interativa respondendo dúvidas comuns sobre consultas à distância, livre-arbítrio e preparação.
* **💬 Botão Flutuante do WhatsApp**:
  * Botão com aura pulsante e balão de atendimento rápido fixo em todas as páginas.

---

## 🛠️ Tecnologias Utilizadas

* **React 19** com **Vite**
* **Three.js** (Renderização 3D WebGL na mesa de cartas)
* **Lucide React** (Ícones modernos)
* **Canvas-Confetti** (Partículas místicas de celebração ao revelar a carta)
* **Design System Vanilla CSS** (Totalmente responsivo, paleta Dark Velvet & Gold, glassmorphism e tipografia mística com as fontes *Cinzel*, *Cormorant Garamond* e *Plus Jakarta Sans*)

---

## 🚀 Como Rodar Localmente

1. Abra o terminal na pasta do projeto:
   ```bash
   cd d:\Programação\portfolio_tsara_yasmim
   ```
2. Instale as dependências (se ainda não o fez):
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse no navegador:
   `http://localhost:5173/`

---

## 🌐 Como Publicar (Deploy)

O projeto já está configurado para publicação em ambas as plataformas:

### Opção 1: Vercel (Recomendado)
1. Suba seu projeto para o GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio tsara yasmim com mesa 3d"
   git remote add origin https://github.com/SEU-USUARIO/portfolio_tsara_yasmim.git
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
3. Importe o repositório `portfolio_tsara_yasmim`.
4. O Vercel detectará o Vite automaticamente. Clique em **Deploy**!

### Opção 2: GitHub Pages
1. No arquivo `package.json`, adicione o campo homepage com o seu usuário:
   ```json
   "homepage": "https://SEU-USUARIO.github.io/portfolio_tsara_yasmim"
   ```
2. Execute o comando de deploy:
   ```bash
   npm run deploy
   ```
3. Nas configurações do seu repositório no GitHub (*Settings > Pages*), selecione a branch `gh-pages`.

---

## ✏️ Como Personalizar os Contatos

* **WhatsApp**: Para trocar o número de telefone padrão `(11) 99999-9999`, basta procurar por `5511999999999` nos arquivos de `src/components/` e `src/data/baralhoCigano.js` e substituir pelo número real com DDD.
* **Instagram**: No arquivo `src/components/Footer.jsx`, atualize o link do `@tsarayasmim.cigana` para o perfil desejado.
