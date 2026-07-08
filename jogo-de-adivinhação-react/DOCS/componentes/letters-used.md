# 🗂️ Componente: LettersUsed (Histórico de Letras Usadas)

Este componente exibe o histórico de todos os chutes que o jogador já realizou na partida, sinalizando quais foram acertos e quais foram erros.

---

## 📂 Arquivos Relacionados
* **Estrutura:** `src/Components/LettersUsed/index.tsx`
* **Estilização:** `src/Components/LettersUsed/styles.module.css`

---

## ⚙️ Funcionamento e Props

O componente é tipado no TypeScript e recebe um array de objetos contendo a letra e se ela foi ou não correta:

```typescript
export type LettersUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LettersUsedProps[]; // Array de palpites realizados
};
```

### Renderização Dinâmica (Loop `.map`)
O componente percorre o array `data` recebido via props e renderiza uma tag `<Letter />` pequena para cada letra:
```tsx
<div>
  {data.map(({ value, correct }) => (
    <Letter
      key={value}
      value={value}
      size="small"
      color={correct ? "correct" : "wrong"}
    />
  ))}
</div>
```

---

## 🎨 Cores Dinâmicas e Estados Estilizados
No componente `Letter`, a propriedade `color` aplica classes CSS diferentes:
* **Acerto (`color="correct"`)**: Aplica `.letterCorrect` -> Fundo verde claro (`#e1f5ec`) com bordas e texto verdes escuros (`#03ab4f`).
* **Erro (`color="wrong"`)**: Aplica `.letterWrong` -> Fundo amarelo suave (`#ffcf62`) com bordas e texto marrons escuros (`#691b0a`).

## 📐 Layout do Histórico
* **CSS Separator:** O topo do histórico possui uma borda divisória suave (`border-top: 1px solid #c3c3c3`) e margem de `3.25rem` para separá-lo do resto do formulário.
* **Quebra de linha:** As letras são organizadas em um container com `display: flex`, `flex-wrap: wrap` e espaçamento de `0.75rem` entre elas.
