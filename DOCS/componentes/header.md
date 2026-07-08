# 🏷️ Componente: Header (Cabeçalho)

O cabeçalho do projeto tem a responsabilidade de situar o jogador no progresso da partida atual e oferecer uma forma rápida de recomeçar.

---

## 📂 Arquivos Relacionados
* **Estrutura:** `src/Components/Header/index.tsx`
* **Estilização:** `src/Components/Header/styles.module.css`

---

## ⚙️ Funcionamento e Props

O componente é puramente de apresentação (Dummy Component) e recebe as informações e ações via propriedades (`Props`):

```typescript
type Props = {
  current: number;    // Número atual de erros cometidos (vidas perdidas)
  max: number;        // Limite máximo de erros permitidos (vidas totais)
  onRestart: () => void; // Ação disparada para tentar reiniciar o jogo
}
```

### 1. Contador Dinâmico
O cabeçalho exibe de forma textual e destacada as tentativas atuais sobre a capacidade máxima do desafio:
```tsx
<span>
  <strong>{current}</strong> de {max} tentativas
</span>
```

### 2. Reinício com Confirmação
O botão de reinício está associado à função `handleRestartGame` no `App.tsx`. Para evitar que o usuário perca o jogo acidentalmente ao esbarrar no botão de reiniciar, foi implementado um alerta de confirmação:
```typescript
function handleRestartGame() {
  const isConfirmed = window.confirm("Tem certeza que deseja reiniciar o jogo?");
  if (isConfirmed) {
    startGame();
  }
}
```

---

## 🎨 Estilização (CSS Modules)
* **Flexbox:** Organiza a logo do jogo Centralizada no topo e distribui os itens do placar e o botão de reiniciar nas extremidades usando `justify-content: space-between`.
* **Micro-animação:** O botão de reiniciar (ícone svg) possui uma animação sutil de aumento de tamanho quando o usuário passa o mouse (`scale: 1.3`) com transição suave de `transition: scale 0.3s`.
