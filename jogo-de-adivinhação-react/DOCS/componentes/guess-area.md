# ✍️ Área: Guess Area (Área do Palpite)

Esta área permite que o usuário digite o palpite de uma letra e o envie para processamento.

---

## 📂 Arquivos Relacionados
* **Componente Input:** `src/Components/Input/index.tsx`
* **Estilos Input:** `src/Components/Input/styles.module.css`
* **Componente Button:** `src/Components/Button/index.tsx`
* **Estilos Button:** `src/Components/Button/styles.module.css`
* **Layout na Página:** `src/App.tsx` e `src/app.module.css` (classe `.guess`)

---

## ⚙️ Componentes Reutilizáveis

### 1. O Componente `Input`
O `Input` encapsula a tag `<input>` estendendo as propriedades nativas através de `React.ComponentProps<'input'>`.
* **Segurança:** Utiliza `{...rest}` para repassar qualquer propriedade padrão (como `onChange`, `value`, `placeholder`, `maxLength`, etc.).
* **Estilo Customizado:** Fundo lilás claro, borda roxa e caixa alta no texto digitado (`text-transform: uppercase`).

### 2. O Componente `Button`
O `Button` estende a propriedade nativa `button` e requer uma propriedade `title`.
* **Visual Premium:** Cor roxa escura, cantos arredondados e efeito de redução de brilho (`brightness(0.9)`) ao passar o mouse.

---

## 🔄 Fluxo de Estado Controlado no `App.tsx`

Para que o formulário funcione como um **Componente Controlado** e limpe automaticamente o campo ao enviar a resposta:
1. Sincronizamos o estado `letter` com o valor do input (`value={letter}`).
2. Atualizamos o estado a cada caractere digitado (`onChange={(e) => setLetter(e.target.value)}`).
3. O botão dispara o clique para a função `handleConfirm()`.
4. Ao final do processamento correto de um palpite na função `handleConfirm()`, resetamos o estado:
   ```typescript
   setLetter(""); // Isso faz a letra desaparecer do campo de input imediatamente!
   ```
5. Caso o usuário envie uma letra que já foi digitada anteriormente, o sistema também limpa o input antes de disparar o alerta:
   ```typescript
   if (exists) {
     setLetter("");
     return alert("Letra já utilizada: " + value);
   }
   ```

---

## 🎨 Estilização
* **Alinhamento:** A classe `.guess` no `app.module.css` posiciona o input e o botão lado a lado com `display: flex` e um espaçamento de `0.74rem`.
