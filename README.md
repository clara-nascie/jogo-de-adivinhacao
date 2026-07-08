# 🎮 Jogo de Adivinhação - React + TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-53%25-%233178C6?logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-43%25-%231572B6?logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-4%25-%23E34F26?logo=html5&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-Biblioteca-%2361DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Bundler-%23646CFF?logo=vite&logoColor=white)

Um jogo interativo de adivinhação de palavras com dicas e histórico de palpites, construído para praticar conceitos fundamentais do React 19, TypeScript e escopo isolado de estilização com CSS Modules.

---

## 🔍 Preview do Jogo

<div align="center">
  <img src="./DOCS/assets/preview.png" alt="Preview do Jogo" width="500px" />
</div>

---

## 🚀 Como Executar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/clara-nascie/jogo-de-adivinha--o---react.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd jogo-de-adivinha--o---react
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento do Vite:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   Acesse o endereço exibido no terminal (geralmente [http://localhost:5173](http://localhost:5173)).

---

## 📚 Documentação Detalhada

Criamos uma documentação modular completa detalhando o processo de criação de cada parte do projeto. Você pode acessá-la através dos links abaixo:

* **[Índice de Documentos](./DOCS/README.md)**: Apresentação da documentação.
* **[Tecnologias Utilizadas](./DOCS/tecnologias.md)**: Detalhes de arquitetura e boas práticas.
* **Componentes de Interface (Áreas):**
  * **[1. Header (Cabeçalho)](./DOCS/componentes/header.md)** Placar e botão de reiniciar.
  * **[2. Tip (Dica)](./DOCS/componentes/tip.md)** Exibição da dica dinâmica.
  * **[3. Word Area (Área da Palavra)](./DOCS/componentes/word-area.md)** Ocultação e revelação das letras.
  * **[4. Guess Area (Área de Palpite)](./DOCS/componentes/guess-area.md)** Input controlado e envio.
  * **[5. Letters Used (Letras Utilizadas)](./DOCS/componentes/letters-used.md)** Histórico de chutes com cores.
* **[Fluxo de Jogo Completo](./DOCS/fluxo-jogo.md)**: Fluxo lógico passo a passo (Diagrama e funções).
