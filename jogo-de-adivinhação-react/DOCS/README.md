# 📚 Documentação do Projeto: Jogo de Adivinhação

![TypeScript](https://img.shields.io/badge/TypeScript-53%25-%233178C6?logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-43%25-%231572B6?logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-4%25-%23E34F26?logo=html5&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-Biblioteca-%2361DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Bundler-%23646CFF?logo=vite&logoColor=white)

Bem-vindo à pasta de documentação do jogo de adivinhação desenvolvido em React + TypeScript. Esta estrutura foi dividida para tornar o entendimento do processo de criação de cada parte do projeto mais claro e fácil de navegar.

---

## 📂 Estrutura de Documentos

* **[Tecnologias Utilizadas](file:///c:/Users/Clara/Desktop/PROJETOS%20CLARA/jogo%20de%20adivinha%C3%A7%C3%A3o%20-%20react/jogo-de-adivinha%C3%A7%C3%A3o-react/DOCS/tecnologias.md)**: Visão geral da stack do projeto e padrões adotados (Vite, CSS Modules, TypeScript).
* **Componentes de Interface (Áreas):**
  * **[1. Header (Cabeçalho)](file:///c:/Users/Clara/Desktop/PROJETOS%20CLARA/jogo%20de%20adivinha%C3%A7%C3%A3o%20-%20react/jogo-de-adivinha%C3%A7%C3%A3o-react/DOCS/componentes/header.md)**: Logo, tentativas e confirmação de reinício.
  * **[2. Tip (Dica)](file:///c:/Users/Clara/Desktop/PROJETOS%20CLARA/jogo%20de%20adivinha%C3%A7%C3%A3o%20-%20react/jogo-de-adivinha%C3%A7%C3%A3o-react/DOCS/componentes/tip.md)**: Exibição da dica dinâmica do desafio.
  * **[3. Word Area (Área da Palavra)](file:///c:/Users/Clara/Desktop/PROJETOS%20CLARA/jogo%20de%20adivinha%C3%A7%C3%A3o%20-%20react/jogo-de-adivinha%C3%A7%C3%A3o-react/DOCS/componentes/word-area.md)**: Divisão da palavra secreta e revelação condicional.
  * **[4. Guess Area (Área de Palpite)](file:///c:/Users/Clara/Desktop/PROJETOS%20CLARA/jogo%20de%20adivinha%C3%A7%C3%A3o%20-%20react/jogo-de-adivinha%C3%A7%C3%A3o-react/DOCS/componentes/guess-area.md)**: Controle do input de texto e ação de confirmação.
  * **[5. Letters Used (Letras Utilizadas)](file:///c:/Users/Clara/Desktop/PROJETOS%20CLARA/jogo%20de%20adivinha%C3%A7%C3%A3o%20-%20react/jogo-de-adivinha%C3%A7%C3%A3o-react/DOCS/componentes/letters-used.md)**: Histórico horizontal com cores de acerto e erro.
* **[Fluxo de Jogo Completo](file:///c:/Users/Clara/Desktop/PROJETOS%20CLARA/jogo%20de%20adivinha%C3%A7%C3%A3o%20-%20react/jogo-de-adivinha%C3%A7%C3%A3o-react/DOCS/fluxo-jogo.md)**: Funcionamento lógico passo a passo (Sorteio, Validações, Fim de Jogo).

---

## 🎮 Visão Geral do Jogo

O objetivo do jogo é adivinhar uma palavra secreta sorteada aleatoriamente a partir de um banco de dados pré-definido. Cada palpite correto preenche a letra correspondente na palavra, e palpites incorretos contam para o limite máximo de tentativas. O jogo notifica o usuário ao final (vitória ou derrota) e se reinicia automaticamente.
