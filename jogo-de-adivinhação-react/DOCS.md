# Documentação do Projeto: Jogo de Adivinhação (React + TypeScript)

Este documento detalha o funcionamento, as tecnologias e a estrutura passo a passo desenvolvida no projeto do jogo de adivinhação de palavras.

---

## 🛠️ Tecnologias Utilizadas
* **React 19**: Biblioteca base para a construção das interfaces de usuário.
* **TypeScript**: Adiciona tipagem estática e segurança ao desenvolvimento JavaScript.
* **Vite**: Ferramenta de build extremamente veloz e servidor de desenvolvimento local.
* **CSS Modules**: Escopo isolado de estilização por componente (padrão `*.module.css`), evitando vazamento ou conflito de estilos globais.
* **Git**: Controle de versionamento do código.

---

## 📌 Estrutura do Projeto e Áreas

O projeto está modularizado em componentes reutilizáveis dentro da pasta `src/Components/` e a lógica central está concentrada no `App.tsx`.

### 1. Área do Header (Cabeçalho)
* **Arquivo:** `src/Components/Header/`
* **Função:** Exibe a logo do jogo, o indicador de progresso de tentativas restantes e o botão para reiniciar a partida.
* **Características:**
  * Recebe `current` (tentativas atuais), `max` (máximo de tentativas) e `onRestart` como props.
  * O botão de reiniciar inclui uma confirmação de segurança via `window.confirm` para evitar reinícios acidentais:
    ```typescript
    function handleRestartGame() {
      const isConfirmed = window.confirm("Tem certeza que deseja reiniciar o jogo?");
      if (isConfirmed) startGame();
    }
    ```

### 2. Área da Dica (Tip)
* **Arquivo:** `src/Components/Tip/`
* **Função:** Exibe a dica associada à palavra que precisa ser adivinhada.
* **Características:**
  * O texto é exibido de forma dinâmica de acordo com a palavra sorteada do banco de palavras (`challenge.tip`).

### 3. Área da Palavra Secreta (Word Area)
* **Localização:** No miolo do `App.tsx` usando o componente `Letter`.
* **Função:** Mostra caixas vazias para cada letra da palavra sorteada, revelando a letra apenas se ela já tiver sido adivinhada.
* **Características:**
  * Divide a palavra secreta em letras (`split("")`) e compara cada letra com a lista de letras já chutadas (`lettersUsed`):
    ```tsx
    {challenge.word.split("").map((letter, index) => {
      const letterUsed = lettersUsed.find(
        (used) => used.value.toUpperCase() === letter.toUpperCase()
      );
      return (
        <Letter
          key={index}
          value={letterUsed?.value}
          color={letterUsed?.correct ? "correct" : "default"}
        />
      );
    })}
    ```

### 4. Área de Palpite (Guess Area)
* **Localização:** Integrado na seção de input/botão do `App.tsx`.
* **Função:** Fornece o campo para o usuário digitar uma única letra (`Input`) e o botão para confirmar o palpite (`Button`).
* **Características:**
  * Controlado via estado `letter` no React.
  * O campo de input possui foco automático (`autoFocus`) e limite de 1 caractere (`maxLength={1}`).
  * Ao clicar em "Confirmar" ou enviar, a função `handleConfirm()` é disparada.

### 5. Área de Letras Utilizadas (LettersUsed)
* **Arquivo:** `src/Components/LettersUsed/`
* **Função:** Exibe na base do container um histórico horizontal de todos os palpites já feitos pelo jogador.
* **Características:**
  * Exibe cada letra digitada de forma menor (`size="small"`).
  * Possui cores dinâmicas: **verde** (`color="correct"`) caso a letra faça parte da palavra secreta, ou **amarela/marrom** (`color="wrong"`) caso a letra esteja incorreta.

---

## 🔄 Fluxo de Jogo e Passo a Passo lógico

### Passo 1: Inicialização do Jogo (`startGame`)
Quando a página é montada ou o jogo é reiniciado, o `useEffect` dispara a função `startGame`:
1. Sorteia um índice aleatório no array `WORDS` (`src/utils/words.ts`).
2. Define a palavra ativa no estado `challenge`.
3. Reseta a pontuação (`score`) para `0`.
4. Reseta a lista de letras chutadas (`lettersUsed`) para `[]`.
5. Limpa a letra no campo de texto (`letter`) para `""`.

### Passo 2: Envio de Palpite (`handleConfirm`)
Quando o jogador insere uma letra e clica em "Confirmar":
1. **Validação de campo vazio:** Se não houver caractere no input, exibe um alerta e interrompe o envio.
2. **Validação de letra repetida:** Verifica na lista `lettersUsed` se a letra já foi chutada. Se sim, alerta o jogador, limpa o input e encerra a ação.
3. **Conversão:** Transforma a letra digitada em maiúscula para evitar distinção entre minúsculo/maiúsculo.
4. **Cálculo de acertos (`hits`):** Conta quantas vezes a letra aparece na palavra secreta.
5. **Atualização da Pontuação:** Adiciona a quantidade de acertos (`hits`) à pontuação acumulada (`score`).
6. **Inserção no histórico:** Adiciona a letra ao array `lettersUsed` marcando `correct: true` (se `hits > 0`) ou `correct: false`.
7. **Limpeza:** Reseta o estado `letter` para `""` para que o input fique em branco automaticamente para a próxima jogada.

### Passo 3: Verificação de Fim de Jogo
Um `useEffect` monitora as mudanças em `score` (acertos) e `lettersUsed.length` (tentativas feitas):
* **Vitória:** Se o `score` atual for igual ao tamanho total da palavra secreta (`challenge.word.length`), o jogador adivinhou a palavra inteira. Dispara `endGame("Parabéns, você venceu!")`.
* **Derrota:** Se o total de palpites (`lettersUsed.length`) atingir o limite calculado (`ATTEMPT_MAX + challenge.word.length`), o limite de tentativas estourou. Dispara `endGame("que pena, não foi dessa vez =/")`.
* A função `endGame` exibe o alerta final com o resultado e recomeça a partida imediatamente.

---

## 🎨 Guia de Boas Práticas Adotadas
1. **Padrão de Módulos de Estilo (singular):** Uso estrito de `.module.css` (e não `.modules.css`) para garantir que o compilador do Vite/Rolldown processe e empacote as classes como CSS Modules corretamente sem lançar erros de `Missing export`.
2. **Componentes Controlados:** O estado do input é compartilhado entre a propriedade `value` e o evento `onChange` do React para possibilitar a limpeza automática do campo via código.
3. **Escopo Limpo do Componente:** Lógicas com efeitos colaterais de alteração de estado (como checagem e adição de novas letras) são mantidas estritamente dentro de funções callback (`handleConfirm`) e nunca soltas no corpo de renderização do componente, prevenindo loops infinitos.
