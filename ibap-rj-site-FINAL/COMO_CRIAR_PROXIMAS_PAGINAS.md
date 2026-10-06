# ⚡ Como Criar as Próximas Páginas em 5 Minutos

## 🎯 O que você tem agora

```
✅ 4 páginas prontas:
   - index.html (homepage)
   - sobre.html (quem somos)
   - atuacao.html (8 linhas de atuação)
   - contato.html (informações + formulário)

✅ 1 template vazio pronto para copiar:
   - TEMPLATE_NOVA_PAGINA.html

✅ CSS e JS configurados:
   - css/style.css (1600+ linhas)
   - js/script.js (337 linhas)
```

---

## 📋 Próximas 6 páginas a criar

| # | Página | Tipo | Tempo | Status |
|---|---|---|---|---|
| 1 | **projetos.html** | Grid de projetos | 5 min | ⏳ |
| 2 | **boletim.html** | Blog/notícias | 5 min | ⏳ |
| 3 | **trabalhe-conosco.html** | Carreiras | 5 min | ⏳ |
| 4 | **certificacoes.html** | Credenciais | 5 min | ⏳ |
| 5 | **historico.html** | Timeline | 5 min | ⏳ |
| 6 | **responsabilidade-social.html** | RSA/Sustentabilidade | 5 min | ⏳ |

---

## 🚀 Passo-a-passo: Criar uma página nova

### Opção 1: Usar o TEMPLATE (RECOMENDADO)

```bash
# 1. Copiar template
cp TEMPLATE_NOVA_PAGINA.html projetos.html

# 2. Abrir em editor (VSCode)
code projetos.html

# 3. Editar 3 seções:
   - <title> (linha 15)
   - <h1> da seção .page-header (linha ~100)
   - Conteúdo principal (linha ~130)

# 4. Salvar e testar
# Abrir no navegador: file:///seu/caminho/projetos.html
```

### Opção 2: Copiar uma página já feita

```bash
# Se preferir clonar atuacao.html (recomendado)
cp atuacao.html projetos.html

# Depois abrir e editar:
# 1. Título (linha 13)
# 2. Breadcrumb (linha ~68)
# 3. Hero h1 e p (linha ~74)
# 4. Cards de linhas de atuação → trocar por cards de projetos
```

---

## ✏️ Edições mínimas necessárias

Para cada página nova, edite **APENAS**:

### 1️⃣ Título e descrição (no <head>)

```html
<!-- ANTES -->
<title>Linhas de Atuação | IBAP-RJ</title>
<meta name="description" content="Conheça as 8 linhas...">

<!-- DEPOIS -->
<title>Projetos em Destaque | IBAP-RJ</title>
<meta name="description" content="Veja os projetos que o IBAP-RJ desenvolveu...">
```

### 2️⃣ Breadcrumb (mude apenas o último item)

```html
<!-- ANTES -->
<nav class="breadcrumb">
    <a href="/">Home</a> / 
    <strong>Linhas de Atuação</strong>
</nav>

<!-- DEPOIS -->
<nav class="breadcrumb">
    <a href="/">Home</a> / 
    <strong>Projetos</strong>
</nav>
```

### 3️⃣ Hero (mude título e descrição)

```html
<!-- ANTES -->
<section class="page-header">
    <div class="container">
        <h1>Linhas de Atuação</h1>
        <p>Nossos 8 núcleos especializados...</p>
    </div>
</section>

<!-- DEPOIS -->
<section class="page-header">
    <div class="container">
        <h1>Projetos em Destaque</h1>
        <p>Conheça os trabalhos que transformaram...</p>
    </div>
</section>
```

### 4️⃣ Conteúdo principal (mude os cards/seções)

```html
<!-- Copie a estrutura, mude só o conteúdo -->
<section class="content-block">
    <h2>Projetos em destaque</h2>
    
    <!-- Repita este card 3-5 vezes -->
    <div class="project-card">
        <h3>Nome do projeto</h3>
        <p>Descrição breve</p>
    </div>
</section>
```

---

## 🎨 Classes CSS reutilizáveis

Não invente novas classes! Use as que já existem:

```html
<!-- Container centralizado (max 1200px) -->
<div class="container">

<!-- Card branca com sombra e animação -->
<section class="content-block">

<!-- Sidebar cinzenta -->
<div class="sidebar-box">

<!-- Botão primário (verde) -->
<a class="btn" href="#">Texto do botão</a>

<!-- Botão outline (azul) -->
<a class="btn btn--outline" href="#">Texto</a>

<!-- Grid responsivo (coloca sozinho em 1, 2 ou 3 colunas) -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">

<!-- Breadcrumb (navegação) -->
<nav class="breadcrumb">
```

---

## 📝 Exemplo prático: Criar projetos.html

### Passo 1: Copiar

```bash
cp TEMPLATE_NOVA_PAGINA.html projetos.html
```

### Passo 2: Abrir e editar

```html
<!-- Linha 15 -->
<title>Projetos em Destaque | IBAP-RJ</title>

<!-- Linha 70 (breadcrumb) -->
<a href="/">Home</a> / <strong>Projetos</strong>

<!-- Linha 77 (hero) -->
<h1>Projetos em Destaque</h1>
<p>Conheça os 5+ projetos transformadores que desenvolvemos para clientes públicos e privados.</p>

<!-- Linha 130+ (conteúdo) -->
<section class="content-block">
    <h2>Nossos Projetos</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
        
        <!-- Projeto 1 -->
        <div style="border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden;">
            <img src="https://ibap-rj.org.br/wp-content/uploads/projeto1.jpg" alt="Projeto 1" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 1.5rem;">
                <h3 style="color: var(--azul-900); margin-bottom: 0.5rem;">Projeto 1</h3>
                <p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 1rem;">Descrição breve do projeto.</p>
                <a href="#" style="color: var(--verde-600); font-weight: 500;">Ver detalhes →</a>
            </div>
        </div>
        
        <!-- Copie e repita para projetos 2, 3, 4... -->
        
    </div>
</section>
```

### Passo 3: Testar

```bash
# Abrir no navegador
open projetos.html

# Ou no VS Code: Right-click → Open in Default Browser
```

---

## 💻 Dicas de produtividade

### Use a busca/replace do seu editor

```
# VSCode: Ctrl+H (ou Cmd+H no Mac)

Buscar: "Linhas de Atuação"
Substituir: "Projetos em Destaque"
# Replace All → Pronto! 90% da página feita
```

### Copie estrutura de uma página parecida

```
├─ atuacao.html       ← Grid de 8 items → copie para projetos.html
├─ contato.html       ← Formulário → copie para Newsletter
├─ sobre.html         ← Sidebar + conteúdo → copie para histórico
```

### Valide HTML antes de publicar

```bash
# Usar extensão do VSCode: "HTML Validator"
# Ou acesse: https://validator.w3.org/
```

---

## 🎯 Checklist para cada página nova

Antes de terminar, certifique-se:

- [ ] Título e descrição atualizados
- [ ] Breadcrumb correto
- [ ] Hero com título + descrição
- [ ] Links internos apontam para arquivos certos (ex: `/atuacao.html`)
- [ ] Imagens têm `alt` text
- [ ] Testado em mobile (320px) — sem overflow
- [ ] Testado em desktop (1200px) — layout correto
- [ ] Menu hamburger em mobile funciona
- [ ] Footer está igual à homepage
- [ ] Todos os links externos têm `target="_blank" rel="noopener"`

---

## 📊 Estrutura padrão de cada página

```html
<!DOCTYPE html>
<html lang="pt-BR" class="js">
<head>
    <!-- Meta tags (SEO) -->
    <title>Título | IBAP-RJ</title>
    <!-- ... -->
</head>
<body>
    <!-- 1. Utility bar (sempre igual) -->
    <div class="utility-bar">...</div>
    
    <!-- 2. Header com logo e menu (sempre igual) -->
    <header class="site-header">...</header>
    
    <!-- 3. Breadcrumb (editar: último item) -->
    <nav class="breadcrumb">...</nav>
    
    <!-- 4. HERO (editar: title + description) -->
    <section class="page-header">
        <h1>⬅️ EDITAR</h1>
        <p>⬅️ EDITAR</p>
    </section>
    
    <!-- 5. CONTEÚDO (editar: todo) -->
    <main id="conteudo">
        <div class="container page-layout">
            <article>
                <!-- Seu conteúdo aqui -->
            </article>
            <aside class="sidebar">
                <!-- Links relacionados -->
            </aside>
        </div>
    </main>
    
    <!-- 6. Footer (sempre igual) -->
    <footer class="site-footer">...</footer>
</body>
</html>
```

---

## 🔥 "Shortcuts" para criar rápido

### Criar cards em grid (copie/cole)

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
    <div style="padding: 1.5rem; background: var(--surface); border-radius: var(--radius);">
        <h3 style="color: var(--azul-900); margin-bottom: 0.75rem;">Card 1</h3>
        <p style="color: var(--muted);">Descrição</p>
    </div>
    <!-- Repita o <div> acima para mais cards -->
</div>
```

### Criar botão (copie/cole)

```html
<!-- Botão primário (verde) -->
<a class="btn" href="/contato.html">Botão</a>

<!-- Botão outline (azul) -->
<a class="btn btn--outline" href="/sobre.html">Botão</a>
```

### Criar box de informação (copie/cole)

```html
<div style="padding: 1.5rem; background: var(--azul-100); border-radius: var(--radius); border-left: 3px solid var(--verde-600);">
    <h3 style="color: var(--azul-900); margin-bottom: 0.5rem;">Título</h3>
    <p style="color: var(--muted);">Descrição</p>
</div>
```

---

## ⏱️ Tempo total para terminar

```
Projetos           → 5 min (copiar atuacao.html)
Boletim            → 5 min (copiar contato.html)
Trabalhe conosco   → 5 min (copiar atuacao.html)
Certificações      → 5 min (copiar sobre.html)
Histórico          → 5 min (copiar sobre.html)
RSA/Sustentabilidade → 5 min (copiar atuacao.html)
─────────────────────────────
Total               → 30 minutos! 🚀
```

---

## 📞 Problemas comuns e soluções

### ❌ "Página fica toda misturada em mobile"

**Solução:** A classe `.page-layout` já é responsiva. Deixe como está.

### ❌ "Imagem não aparece"

**Solução:** Verifique a URL:
```html
<!-- ✅ Correto -->
<img src="https://ibap-rj.org.br/wp-content/uploads/...">

<!-- ❌ Errado -->
<img src="imagem.jpg">  <!-- Procura no diretório errado -->
```

### ❌ "Botão fica estranho"

**Solução:** Use `<a class="btn">` ou `<button class="btn">`, não `<input>`:
```html
<!-- ✅ Correto -->
<a class="btn" href="#">Clique aqui</a>

<!-- ❌ Errado -->
<input class="btn" value="Clique">
```

### ❌ "Sidebar não aparece em mobile"

**Solução:** É normal! A sidebar só aparece em 1000px+. Veja em desktop.

### ❌ "Link não funciona"

**Solução:** Use caminhos relativos:
```html
<!-- ✅ Correto (relativo) -->
<a href="/contato.html">Contato</a>
<a href="../css/style.css">CSS</a>

<!-- ❌ Errado (absoluto) -->
<a href="/home/usuario/contato.html">
```

---

## 🎬 Comece agora! (5 minutos)

```bash
# 1. Crie a página de projetos
cp TEMPLATE_NOVA_PAGINA.html projetos.html

# 2. Abra em um editor
code projetos.html

# 3. Edite 3 linhas:
#    - Linha 15: <title>
#    - Linha 65: <strong> do breadcrumb
#    - Linha 73: <h1>

# 4. Salve (Ctrl+S)

# 5. Abra no navegador (Right-click → Open in Browser)

# Pronto! Página criada! 🎉
```

---

## 📦 Arquivos de referência

Se ficar dúvida:

```
📄 atuacao.html         ← Referência para pages com GRID
📄 contato.html         ← Referência para pages com FORMULÁRIO
📄 sobre.html           ← Referência para pages com SIDEBAR
📄 TEMPLATE_NOVA_PAGINA.html ← Template em branco
📄 css/style.css        ← Variáveis CSS e classes
```

---

## ✨ Resumo final

| O que | Como | Tempo |
|---|---|---|
| Criar página | Copiar TEMPLATE_NOVA_PAGINA.html | 1 min |
| Editar título | Procure `<title>` e altere | 1 min |
| Editar conteúdo | Substitua section.content-block | 3 min |
| Testar | Abra no navegador | 1 min |
| **Total** | — | **5 min/página** |

**6 páginas × 5 min = 30 minutos** ✅

---

**Quer começar?** Copie `TEMPLATE_NOVA_PAGINA.html` agora! 🚀
