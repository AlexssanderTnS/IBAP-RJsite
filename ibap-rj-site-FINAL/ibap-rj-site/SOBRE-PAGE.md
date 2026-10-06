# Página "Quem Somos" – Guia Completo

## 📄 Arquivos envolvidos

```
ibap-rj-site/
├── sobre.html                 ← Página "Quem somos"
├── css/
│   ├── style.css             ← Estilos principais (reutilizados)
│   └── internal-pages.css    ← Estilos adicionais para páginas internas
└── js/script.js              ← JavaScript (reutilizado)
```

---

## 🎯 O que a página inclui

### Estrutura

1. **Barra de acesso rápido** — Transparência, Editais, Contracheque, Ponto IBAP, Canal de denúncias
2. **Header fixo** — Logo + menu responsivo + botão "Trabalhe conosco"
3. **Breadcrumb** — Home / Sobre o IBAP-RJ / **Quem Somos**
4. **Hero interno** — Título + descrição sobre o instituto
5. **Conteúdo principal** em blocos:
   - O Instituto
   - Missão, Visão e Valores (com cards de valores)
   - Políticas de Qualidade e SMS
   - Documentos Institucionais (PDFs)
   - Call-to-action para outras seções
6. **Sidebar** com navegação:
   - Links "Sobre o IBAP-RJ"
   - Links "Linhas de Atuação"
   - Contato rápido
7. **Rodapé** — Navegação completa + copyright

### Componentes visuais

| Componente | Descrição |
|---|---|
| **content-block** | Caixa branca com borda, sombra e conteúdo aninhado |
| **value-card** | Cards verdes (Ética, Qualidade, Responsabilidade, Inovação) |
| **sidebar-box** | Caixas na lateral com listas de links |
| **document-link** | Links para PDFs com ícone de arquivo |
| **call-to-action** | Faixa verde clara com 3 botões de ação |

---

## 🚀 Como usar

### 1. Visualizar localmente

```bash
# Abra no navegador diretamente
open sobre.html

# Ou com servidor local
python3 -m http.server 8000
# Acesse http://localhost:8000/sobre.html
```

### 2. Integrar ao site

A página `sobre.html` está pronta para ser movida ou copiada para a estrutura real do seu servidor:

```
www.ibap-rj.org.br/
├── sobre-o-ibap-rj/
│   └── quem-somos/
│       └── index.html  (renomear sobre.html para index.html)
```

### 3. Atualizar links

Se a estrutura de pastas mudar, atualize os caminhos relativos:

```html
<!-- Se sobre.html está em: /sobre-o-ibap-rj/quem-somos/ -->
<!-- Atualize os <link> e <script> assim: -->

<!-- De: -->
<link rel="stylesheet" href="../css/style.css">
<script src="../js/script.js" defer></script>

<!-- Para: -->
<link rel="stylesheet" href="/css/style.css">
<script src="/js/script.js" defer></script>
```

---

## 🎨 Customização

### Cores principais

Edite em `css/style.css` (raíz):

```css
:root {
    --azul-950: #0a1d33;     /* Azul muito escuro */
    --azul-900: #0e2a47;     /* Azul escuro (usamos para hero) */
    --azul-700: #1d4e7e;     /* Azul médio (links) */
    --azul-100: #e8f0f8;     /* Azul muito claro (cards) */
    --verde-600: #17785a;    /* Verde escuro (acentos) */
    --verde-100: #e8f3f0;    /* Verde muito claro (CTA) */
}
```

### Tipografia

```css
--font-sans: 'Public Sans';     /* Corpo do texto */
--font-serif: 'Source Serif 4'; /* Títulos */
```

### Espaçamento

```css
--radius-sm: 6px;      /* Bordas pequenas */
--radius: 12px;        /* Bordas padrão */
--radius-lg: 16px;     /* Bordas grandes */
--container: 1200px;   /* Largura máxima */
```

---

## 📝 Editando conteúdo

### Seção: O Instituto

Localizada em `<section class="content-block">` após o breadcrumb.

```html
<section class="content-block">
    <h2>O Instituto</h2>
    <p>Seu texto aqui...</p>
    <!-- Adicione quantos <p> precisar -->
</section>
```

### Cards de valores

Para adicionar/remover valores:

```html
<div class="value-card">
    <h4>Seu Valor</h4>
    <p>Descrição do valor...</p>
</div>
```

### Links da sidebar

Atualize as URLs conforme sua estrutura:

```html
<div class="sidebar-box">
    <h3>Sobre o IBAP-RJ</h3>
    <ul>
        <li><a href="AQUI_COLOQUE_SEUS_LINKS">Quem Somos</a></li>
        <!-- Mais links... -->
    </ul>
</div>
```

### Documentos (PDFs)

Adicione/remova links para PDFs:

```html
<a class="document-link" 
   href="LINK_DO_PDF" 
   target="_blank" 
   rel="noopener noreferrer">
    Nome do Documento<span class="visually-hidden"> (PDF, abre em nova aba)</span>
</a>
```

---

## 📱 Responsividade testada

| Largura | Layout |
|---|---|
| 320px (mobile) | 1 coluna (sidebar acima) |
| 600px (tablet) | 1 coluna (sidebar 2 cols) |
| 1000px+ (desktop) | 2 colunas (conteúdo + sidebar) |

---

## ♿ Acessibilidade

✅ Navegação por teclado completa  
✅ Focus visível em links e botões  
✅ Estrutura semântica HTML5  
✅ Atributos ARIA para landmarks (`aria-label`, `aria-labelledby`)  
✅ Contraste WCAG AA  
✅ Respeita `prefers-reduced-motion`  
✅ Links internacionalizados com atributo `rel` adequado  

### Dicas de acessibilidade ao editar

```html
<!-- ✅ Bom: link externo com rel apropriado -->
<a href="link.pdf" target="_blank" rel="noopener noreferrer">
    Documento<span class="visually-hidden"> (PDF, abre em nova aba)</span>
</a>

<!-- ❌ Evite: "Clique aqui" -->
<a href="link.pdf">Clique aqui</a>

<!-- ✅ Bom: descrição clara -->
<a href="link.pdf">Estatuto Social</a>
```

---

## 🔗 Como criar outras páginas internas

### Modelo base

1. Copie `sobre.html`
2. Mude o `<title>` e meta description
3. Atualize o breadcrumb
4. Mude o título no `page-header`
5. Atualize o conteúdo nos `content-block`
6. Ajuste os links da sidebar conforme necessário

### Arquivo CSS para páginas internas

Se usar muitas páginas internas, considere separar o CSS:

```html
<head>
    <!-- ... -->
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/internal-pages.css"> ← Adicione isto
</head>
```

Ou coloque todo o CSS de `internal-pages.css` ao final de `style.css`.

---

## 🧪 Teste sua página

### Checklist antes de publicar

- [ ] Links externos abrem em nova aba (`target="_blank"`)
- [ ] Links PDF têm `rel="noopener noreferrer"`
- [ ] Navegação por teclado funciona (Tab, Enter, Esc)
- [ ] Contraste de cores é adequado (WCAG AA)
- [ ] Imagens têm `alt` text descritivo
- [ ] Mobile: sem overflow horizontal
- [ ] Desktop: sidebar aparece ao lado direito
- [ ] Breadcrumb está correto
- [ ] Menu hamburger funciona e fecha
- [ ] Todas as cores estão usando variáveis CSS

### Teste visual

```bash
# Mobile (320px)
# Abra DevTools (F12) → Device Toolbar → iPhone SE

# Tablet (768px)
# DevTools → iPad

# Desktop (1200px+)
# Janela normal do navegador
```

### Teste de acessibilidade

```bash
# Navegação por teclado
# Pressione TAB várias vezes — todos os links/botões devem ficar em foco

# Contraste
# Abra: https://webaim.org/resources/contrastchecker/
# Compare as cores (cor de texto vs. cor de fundo)

# Redução de movimento
# DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion
# Verif se as animações param
```

---

## 🚀 Deploy

### Com GitHub Pages

1. Adicione `sobre.html` ao repositório
2. Abra em: `https://ibap-rj.github.io/ibap-rj-site/sobre.html`

### Com servidor próprio

1. Renomeie para `index.html`
2. Coloque em: `/www/sobre-o-ibap-rj/quem-somos/`
3. Acesse em: `https://ibap-rj.org.br/sobre-o-ibap-rj/quem-somos/`

### Redirecionamento automático (WordPress)

Se o site antigo tem URLs diferentes, configure redirecionamento 301 no `.htaccess`:

```apache
# No .htaccess da raiz
Redirect 301 /quem-somos /sobre-o-ibap-rj/quem-somos/
```

---

## 📊 Estrutura do HTML

```
<body>
  ├── utility-bar (acesso rápido)
  ├── site-header (logo + menu)
  ├── header-sentinel (marcador para sticky)
  ├── breadcrumb
  ├── page-header (hero azul)
  ├── <main id="conteudo">
  │   └── page-layout (2 colunas)
  │       ├── page-content (artigos)
  │       │   ├── content-block (O Instituto)
  │       │   ├── content-block (Missão/Visão/Valores)
  │       │   ├── content-block (Políticas)
  │       │   ├── content-block (Documentos)
  │       │   └── call-to-action
  │       └── sidebar
  │           ├── sidebar-box (Sobre)
  │           ├── sidebar-box (Linhas de Atuação)
  │           └── sidebar-box (Contato)
  ├── site-footer
  └── back-to-top (botão flutuante)
</body>
```

---

## 🐛 Troubleshooting

### Problema: Links não funcionam

**Causa:** Caminhos relativos incorretos.

```html
<!-- ❌ Errado -->
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>

<!-- ✅ Certo (use ../ para subir um nível) -->
<link rel="stylesheet" href="../css/style.css">
<script src="../js/script.js" defer></script>
```

### Problema: Menu não fecha ao clicar em link

**Causa:** JavaScript não está carregando.

```html
<!-- Verifique se script.js existe no caminho -->
<script src="../js/script.js" defer></script>

<!-- Abra DevTools (F12) → Console → procure por erros -->
```

### Problema: Cores diferentes do esperado

**Causa:** Variáveis CSS sobrescritas.

```css
/* Adicione !important se necessário */
:root {
    --azul-900: #0e2a47 !important;
}
```

### Problema: Sidebar aparece abaixo no desktop

**Causa:** Viewport não reconhecida.

```html
<!-- Certifique-se de ter esta linha -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

---

## 📚 Referências

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
- [HTML Semântico](https://developer.mozilla.org/en-US/docs/Glossary/semantic_HTML)

---

## 💡 Dicas finais

1. **Mantenha a hierarquia de títulos:** H1 (página), H2 (seções), H3 (subsecções)
2. **Reutilize componentes:** Use `content-block`, `sidebar-box`, etc.
3. **Teste sempre:** Antes de publicar, teste em mobile, tablet e desktop
4. **Documente mudanças:** Se modificar estilos, atualize este arquivo
5. **Backup:** Mantenha versões anteriores do HTML em Git

---

## 📞 Suporte

Para dúvidas sobre:
- **Estrutura HTML:** Veja o arquivo `sobre.html`
- **Estilos CSS:** Consulte `style.css` e `internal-pages.css`
- **Interatividade JS:** Abra `script.js`
- **Skill de padrões:** Use `ibap-frontend-standard` no Claude

Boa sorte com a página! 🚀
