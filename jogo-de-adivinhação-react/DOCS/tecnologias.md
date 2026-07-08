# 🛠️ Tecnologias Utilizadas e Boas Práticas

Esta seção descreve a stack tecnológica adotada para o desenvolvimento do jogo, bem como os padrões e regras que foram fundamentais para resolver problemas técnicos durante a escrita do código.

---

## 💻 A Stack de Desenvolvimento

### 1. React 19
Utilizado para construir interfaces declarativas e dinâmicas. O gerenciamento de estados (`useState`) e controle de ciclos de vida/efeitos colaterais (`useEffect`) foram usados para toda a engine lógica do jogo.

### 2. TypeScript
Garantiu segurança nos dados definindo interfaces específicas, como a estrutura da palavra sorteada (`Challenge`) e das letras no histórico (`LettersUsedProps`). Isso previne bugs comuns de propriedades indefinidas em tempo de desenvolvimento.

### 3. Vite
Substituto moderno para o antigo Webpack/Create React App. Usado como o servidor local de desenvolvimento (disparando na porta `5173`) e compilador de produção extremamente veloz.

### 4. CSS Modules
Adotado para criar estilizações seguras específicas de cada componente. 

---

## 💡 Lições Aprendidas e Boas Práticas Adotadas

Durante o desenvolvimento, nos deparamos com erros comuns de programação e criamos soluções sólidas baseadas em boas práticas:

### ⚠️ Regra estrita dos CSS Modules no Vite
* **O Problema:** Nomear um arquivo de estilos como `styles.modules.css` (no plural) fazia com que o Vite o tratasse como uma folha de estilos global comum, não criando a exportação padrão de classes e quebrando a página (tela branca) com o erro `Missing export "default"`.
* **A Solução:** Padronizar rigorosamente o nome dos arquivos no singular: **`styles.module.css`**.

### 🔄 Evitando Loops de Renderização no React
* **O Problema:** Escrever lógica de alteração de estados (como o `setLettersUsed` ou `setAttempts` para salvar palpites) diretamente no corpo do componente React. Como o React re-renderiza o componente ao mudar estados, isso causava um loop infinito de renders que travava o navegador.
* **A Solução:** Manter qualquer lógica de efeito colateral e escrita de dados estritamente protegida dentro de funções de callback (como `handleConfirm()`), disparadas apenas por eventos de clique ou interação direta do usuário.

### 🧩 Importação Segura de Tipos TypeScript no Vite
* **O Problema:** Importar tipos puramente declarativos (como `Challenge`) como se fossem valores normais de JavaScript fazia com que o Vite (Rolldown/ESBuild) procurasse a exportação final no arquivo compilado, disparando erros de `MISSING_EXPORT` e impedindo o build.
* **A Solução:** Usar a cláusula explícita de importação de tipo: `import { type Challenge } from "..."`.
