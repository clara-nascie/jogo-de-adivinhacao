# 🔠 Área: Word Area (Palavra Secreta) e Componente Letter

Esta área é responsável por renderizar a estrutura da palavra secreta, exibindo lacunas vazias ou as letras já adivinhadas pelo usuário.

---

## 📂 Arquivos Relacionados
* **Componente Individual:** `src/Components/Letter/index.tsx`
* **Estilização Componente:** `src/Components/Letter/styles.module.css`
* **Layout na Página:** `src/App.tsx` e `src/app.module.css` (classe `.word`)

---

## ⚙️ O Componente `Letter`

O componente `Letter` é uma caixinha quadrada estilizada usada tanto para a palavra secreta quanto para o histórico de letras chutadas. Suas propriedades são:

```typescript
type Props = {
  value?: string;                    // Letra a ser exibida (opcional)
  size?: "default" | "small";        // Tamanho do bloco (padrão ou pequeno)
  color?: "default" | "correct" | "wrong"; // Cor (padrão, verde ou amarela/marrom)
};
```

---

## 🔄 Funcionamento do Loop no `App.tsx`

Para exibir a palavra de forma dinâmica e reativa:
1. Pegamos a palavra do desafio atual (`challenge.word`).
2. Dividimos a string em um array de letras individuais usando `.split("")`.
3. Mapeamos esse array com `.map()`.
4. Para cada letra da palavra secreta, procuramos no estado `lettersUsed` se ela já foi chutada.
5. Se foi encontrada no histórico de chutes, passamos a letra em `value`. Caso contrário, passamos `undefined` (deixando a caixinha em branco).
6. Se a letra foi acertada, enviamos a propriedade `color="correct"` (para colorir a borda/texto de verde).

```tsx
<div className={styles.word}>
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
</div>
```

---

## 🎨 Estilização
* **Tamanhos e Variantes:** O componente `Letter` adapta-se através de condicionais CSS baseados nas classes dinâmicas.
* **Layout da Palavra:** A classe `.word` do `app.module.css` agrupa as caixas horizontalmente com `flex-wrap: wrap` (para quebrar de linha em telas pequenas) e espaçamento de `1rem`.
