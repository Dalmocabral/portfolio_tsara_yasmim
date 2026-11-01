# Tsara Yasmim — Portfólio Parallax & Templo Oracular 🔮✨

Website One-Page com efeito **Parallax** imersivo para **Centro Espírita Cigano**, atendimentos de **Tarot & Baralho Cigano**, e **Escola de Cursos Presenciais e Online**.

Desenvolvido em **React.js + Vite**, pronto para hospedagem no **GitHub Pages**.

---

## 🌟 Destaques do Projeto

1. **Efeito Parallax Fluido & Multicamadas**:
   - Camadas cósmicas e estelares com movimentação suave em profundidade vinculadas ao scroll e movimento do mouse.
   - Símbolos sagrados da tradição cigana (*Roda Cigana de 16 raios*, fases da lua, mandalas oraculares e faíscas douradas) com velocidades de deslocamento variadas.
   - Banners parallax com citações e bênçãos de Santa Sara Kali.

2. **Mesa Oracular 3D Interativa (Three.js)**:
   - Mesa de veludo com mandala sagrada iluminada à luz de velas.
   - Leque 3D de cartas do Baralho Cigano com física e elevação no hover.
   - Revelação interativa com giro em 3D, confetes dourados, conselho do dia e botão direto para consulta no WhatsApp.

3. **Cursos Presenciais & Online (Área Dedicada)**:
   - Filtros interativos: *Todos os Cursos*, *Presenciais na Tsara* e *Online (Ao Vivo & Plataforma)*.
   - Cards com carga horária, modalidades, diferenciais práticos (imersão ritualística no templo vs. plataforma vitalícia com mentoria).
   - Selos de certificação e materiais inclusos (Baralho consagrado, apostilas, grupo VIP).

4. **Centro Espírita Cigano & Atendimentos**:
   - Apresentação do templo físico e da sacerdotisa/mentora Yasmim.
   - Giras públicas fraternas e passes magnéticos (caridade espiritual).
   - Consultas oraculares de Tarot e Baralho Cigano (presencial e por videochamada privada).
   - Mesa Radiônica e Banhos de Ervas sagradas.

5. **Formulário de Contato & Localização**:
   - Formulário com seleção de interesse (*Curso Presencial*, *Curso Online*, *Consulta*, *Gira*).
   - Feedback com celebração e redirecionamento formatado para o WhatsApp.
   - Informações de endereço do templo, dias de gira, regras de visitação e canais oficiais.

6. **Áudio Místico Síntetizado (Web Audio API)**:
   - Frequências de Solfeggio harmônicas (528Hz e 741Hz), sino tibetano e drone meditativo ambiente, sem peso de arquivos MP3 externos.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```
Acesse no navegador: `http://localhost:5174`

---

## 🌐 Como Publicar no GitHub Pages

Este projeto já está configurado com `base: './'` em `vite.config.js` e possui duas formas simples de publicação:

### Método 1: Automático via GitHub Actions (Recomendado)
1. Crie um repositório no seu GitHub (ex: `portfolio_tsara_yasmim`).
2. Suba o código para o repositório:
   ```bash
   git add .
   git commit -m "feat: portfolio parallax tsara yasmim"
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin master
   ```
3. No GitHub, acesse **Settings** > **Pages** e, em **Build and deployment > Source**, escolha **GitHub Actions**.
4. O workflow `.github/workflows/deploy.yml` compilará e publicará o site automaticamente!

### Método 2: Manual via Script `gh-pages`
```bash
# Compila e envia a pasta dist diretamente para a branch gh-pages
npm run deploy
```
No GitHub, acesse **Settings** > **Pages** e configure a fonte para a branch `gh-pages`.

---

## 🛠️ Personalização Rápida

- **Número do WhatsApp**: Altere nos componentes (`Navbar.jsx`, `ContactSection.jsx`, `ServicesSection.jsx`, `CoursesSection.jsx`, `FloatingWhatsApp.jsx`) substituindo `5511999999999` pelo número real da cliente com DDD.
- **Textos dos Cursos e Serviços**: Edite facilmente o arquivo `src/data/baralhoCigano.js`.
- **Endereço do Centro Espírita**: Atualize em `src/components/ContactSection.jsx` e `src/components/Footer.jsx`.

---

© Tsara Yasmim • Optchá! Salve Santa Sara Kali e o Povo Cigano.
