# 💡 Componente: Tip (Dica)

A dica ajuda o jogador a contextualizar e adivinhar a palavra de forma mais rápida.

---

## 📂 Arquivos Relacionados
* **Estrutura:** `src/Components/Tip/index.tsx`
* **Estilização:** `src/Components/Tip/styles.module.css`

---

## ⚙️ Funcionamento e Props

O componente é muito simples, recebendo apenas o texto da dica:

```typescript
type Props = {
  tip: string; // O texto da dica a ser exibido
};
```

### Exibição Dinâmica
A dica é atualizada de forma reativa a cada nova palavra sorteada. No `App.tsx`, o valor é passado através do estado do desafio atual:
```tsx
<Tip tip={challenge.tip} />
```

---

## 🎨 Estilização (CSS Modules)
* **Visual Premium:** O container do componente possui uma cor de fundo azulada clara suave (`background-color: #ebebfc`) e cantos arredondados (`border-radius: 0.62rem`), com um ícone ilustrativo de lâmpada (`tip.svg`) alinhado à esquerda.
* **Layout Flexbox:** Alinha o ícone e os textos lado a lado de forma centralizada (`align-items: center`) com um espaçamento constante (`gap: 1rem`).
