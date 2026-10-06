# Site Completo IBAP-RJ – Roteiro de Criação

## 📋 Estrutura de páginas

```
ibap-rj-site/
├── index.html                          ✅ Pronta
├── sobre.html                          ✅ Pronta
├── atuacao.html                        (Linhas de atuação detalhadas)
├── projetos.html                       (Projetos em destaque)
├── boletim.html                        (Notícias e publicações)
├── trabalhe-conosco.html               (Vagas e carreira)
├── contato.html                        (Formulário e informações)
├── certificacoes.html                  (ISO e credenciais)
├── historico.html                      (Linha do tempo)
├── responsabilidade-social.html        (Sustentabilidade)
│
├── css/
│   ├── style.css                       ✅ Pronta
│   └── internal-pages.css              ✅ Pronta
│
├── js/
│   └── script.js                       ✅ Pronta
│
└── images/
    └── (logos, banners, fotos)         Apontam para ibap-rj.org.br/wp-content/uploads/
```

---

## 🎯 Prioridade de criação

| # | Página | Tipo | Impacto | Status |
|---|---|---|---|---|
| 1 | **index.html** | Homepage | Crítico | ✅ Pronta |
| 2 | **sobre.html** | Sobre | Alto | ✅ Pronta |
| 3 | **atuacao.html** | Linhas de atuação | Alto | ⏳ Próxima |
| 4 | **contato.html** | Contato | Médio | ⏳ Próxima |
| 5 | **projetos.html** | Projetos | Médio | ⏳ Próxima |
| 6 | **boletim.html** | Notícias | Médio | ⏳ Próxima |
| 7 | **trabalhe-conosco.html** | Carreira | Baixo | ⏳ Próxima |
| 8 | **certificacoes.html** | Credenciais | Baixo | ⏳ Próxima |
| 9 | **historico.html** | História | Baixo | ⏳ Próxima |
| 10 | **responsabilidade-social.html** | Sustentabilidade | Baixo | ⏳ Próxima |

---

## 📄 Conteúdo de cada página

### 1. **atuacao.html** – Linhas de Atuação Detalhadas

**Seções:**
- Hero (azul escuro)
- Introdução
- 8 linhas em cards expansíveis:
  1. Pesquisa e Consultoria
  2. Atendimento ao Cidadão
  3. Gestão para Resultados
  4. Desenvolvimento e Governança
  5. Gestão de Pessoas
  6. Gestão Social e Ambiental
  7. Tecnologia da Informação
  8. Processos Seletivos
- Cada card com: ícone, título, descrição, projetos relacionados, CTA
- Sidebar com links internos
- CTA final para "Trabalhe conosco"

**Imagens:**
- Ícones para cada linha (criar ou usar do site atual)
- Fotos de eventos/workshops

---

### 2. **contato.html** – Informações e Formulário

**Seções:**
- Hero (azul escuro)
- Mapa com localização
- Cards de contato: 
  - Endereço
  - Telefone
  - Email geral
  - Redes sociais
- Formulário de contato (estrutura HTML; integração com backend posterior)
- Horário de funcionamento
- Dúvidas frequentes sobre contato

**Imagens:**
- Foto da sede
- Ícones de contato

---

### 3. **projetos.html** – Projetos em Destaque

**Seções:**
- Hero
- Introdução
- Grid/carrossel de 5+ projetos com:
  - Imagem
  - Título
  - Descrição resumida
  - Tags (Governança, Consultoria, etc)
  - CTA "Ver detalhes"
- Filtros por categoria (opcional JS)
- Depoimentos de clientes
- CTA final

**Imagens:**
- Fotos dos projetos
- Logos de clientes parceiros

---

### 4. **boletim.html** – Notícias e Publicações

**Seções:**
- Hero
- Busca/filtros por data e categoria
- Destaque (artigo mais recente)
- Grid de artigos recentes em 3 colunas
- Paginação
- Sidebar com:
  - Artigos em destaque
  - Categorias
  - Subscribe to newsletter

**Imagens:**
- Thumb/cover de cada artigo
- Fotos de autores

---

### 5. **trabalhe-conosco.html** – Vagas e Carreira

**Seções:**
- Hero (verde claro para diferenciar)
- Texto sobre cultura IBAP-RJ
- Cards de 3 benefícios principais
- Vagas abertas (carrossel ou grid):
  - Título
  - Área
  - Nível
  - Localização
  - Botão "Candidatar" (link para plataforma)
- Sobre nossa cultura (valores, ambiente)
- FAQ sobre processo seletivo
- Botão "Receba vagas por email"

**Imagens:**
- Foto do time/ambiente
- Ícones de benefícios

---

### 6. **certificacoes.html** – Credenciais e ISO

**Seções:**
- Hero
- Introdução (por que certificações importam)
- Grid 2x2 de certifi cações:
  - Logo ISO
  - Título
  - Data de emissão
  - Escopo
  - Link para documento (PDF)
- Outras credenciais (CNPJ, OS, etc)
- CTA: "Solicite cópia"

**Imagens:**
- Logos das ISO (ISO 9001, ISO 27001, etc)
- Certificados/badges

---

### 7. **historico.html** – Linha do Tempo

**Seções:**
- Hero
- Timeline vertical com eventos-chave:
  - 2002: Fundação
  - 2008: Primeira certificação
  - 2015: Expansão para X estados
  - 2020: Conquistas durante pandemia
  - 2025: Novos projetos
  - 2026: Redesign do site
- Cada ponto com texto + imagem (opcional)
- Sidebar com marcos principais

**Imagens:**
- Fotos históricas do instituto
- Logos evolutivos

---

### 8. **responsabilidade-social.html** – Sustentabilidade e RSA

**Seções:**
- Hero (com identidade visual diferente)
- Introdução (compromisso com ODS)
- 3 pilares em cards:
  - Ambiental
  - Social
  - Econômico
- Projetos de impacto (grid 3 colunas):
  - Cada um com foto, título, descrição
- ODS alinhados (ícones numerados)
- Relatórios de sustentabilidade (downloads)
- CTA: "Saiba como trabalhamos com RSA"

**Imagens:**
- Fotos de ações sociais
- Ícones dos 17 ODS (SVG, cores vibrantes)

---

## 🎨 Padrões a manter

### Estrutura HTML
- `<header>` sticky com menu responsivo
- `<main id="conteudo">` com aria-labels
- `<aside>` sidebar (se aplicável)
- `<footer>` idêntico à homepage
- Breadcrumb em todas as internas

### CSS
- Paleta de cores: azul (#0e2a47), verde (#17785a)
- Tipografia: Public Sans (corpo) + Source Serif 4 (títulos)
- Espaçamento: clamp() para responsividade
- Animações: reveal-up, hover suaves
- Focus visível e contraste WCAG AA

### JS
- Menu hamburger com focus trap
- Scroll spy do breadcrumb
- Reveal ao scroll (IntersectionObserver)
- Carrosséis com scroll-snap

### Responsividade
- Mobile (320px): 1 coluna
- Tablet (768px): 2 colunas
- Desktop (1200px+): 3 colunas ou 2 (conteúdo + sidebar)

---

## 🖼️ Imagens necessárias

### Do site atual (reutilizar URLs)
- Logo IBAP-RJ
- Logos de clientes/parceiros
- Fotos de eventos
- Fotos da sede

### Criar novas
- Ícones para as 8 linhas de atuação (SVG ou PNG)
- Banners de seções (hero)
- Imagens de placeholder para projetos (se não tiver fotos reais)
- Ícones de ODS (17 cores vibrantes)

---

## 📦 Entrega final

```
ibap-rj-site/
├── (todas as páginas .html)
├── css/
│   ├── style.css
│   ├── internal-pages.css
│   └── home-specific.css (opcional)
├── js/
│   ├── script.js (base)
│   ├── forms.js (validação de formulários)
│   └── carousel.js (carrosséis avançados)
├── images/
│   ├── icons/
│   ├── projects/
│   ├── team/
│   └── (etc)
├── README.md
├── ARQUITETURA.md (este documento)
└── .gitignore
```

---

## ⏱️ Tempo estimado

| Página | Linhas HTML | Tempo |
|---|---|---|
| atuacao.html | 650 | 2h |
| contato.html | 550 | 1.5h |
| projetos.html | 700 | 2h |
| boletim.html | 600 | 2h |
| trabalhe-conosco.html | 550 | 1.5h |
| certificacoes.html | 400 | 1h |
| historico.html | 500 | 1.5h |
| responsabilidade-social.html | 650 | 2h |
| **Total** | **≈ 4600** | **≈ 13-14h** |

---

## ✅ Checklist de qualidade

Antes de publicar cada página:

- [ ] Sem overflow horizontal em nenhuma resolução
- [ ] Menu hamburger abre/fecha corretamente
- [ ] Focus visível em TAB
- [ ] Navegação por teclado funciona
- [ ] Imagens têm alt text
- [ ] Links externos têm `target="_blank"` e `rel="noopener noreferrer"`
- [ ] Breadcrumb está correto
- [ ] Sidebar (se houver) aparece a partir de 1000px
- [ ] Animações funcionam; reduced-motion respeita
- [ ] Performance: DevTools Lighthouse > 80
- [ ] Mobile: sem cortes de texto ou botões

---

## 🚀 Próximos passos

1. **Confirmar prioridade** — qual página criar primeiro?
2. **Aprovar conteúdo** — texto, números, informações atuais
3. **Coletar imagens** — de onde vêm as fotos de projetos?
4. **Criar páginas** — uma a uma, com testes de responsividade
5. **Integrar** — no GitHub, substituindo gradualmente o site antigo
6. **Publicar** — GitHub Pages ou servidor próprio

---

## 📞 Dúvidas

- Quais projetos colocar em destaque?
- Quantas notícias mostrar na página de boletim?
- O formulário de contato precisa de backend ou é apenas estrutura?
- As vagas apontam para qual plataforma?
- Tem fotos do time para a página de trabalhe conosco?

Responda para que eu priorize e comece! 🎯
