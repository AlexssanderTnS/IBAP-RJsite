# 📤 Guia: Subindo para o GitHub IBAP-RJ

Siga os passos abaixo para colocar o site no repositório do IBAP-RJ no GitHub.

## 1️⃣ Pré-requisitos

- Git instalado ([git-scm.com](https://git-scm.com))
- Conta no GitHub com acesso ao repositório `ibap-rj` (ou criar um novo)
- Chave SSH ou token de acesso configurado no GitHub

### Verificar se Git está instalado

```bash
git --version
```

### Configurar Git (primeira vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@ibap-rj.org.br"
```

---

## 2️⃣ Criar repositório no GitHub (se não existir)

1. Acesse [github.com/IBAP-RJ](https://github.com/IBAP-RJ) (ou crie a organização se não houver)
2. Clique em **New repository**
3. Nome: `ibap-rj-site` (ou similar)
4. Descrição: "Site institucional do IBAP-RJ – redesign 2026"
5. Público ou privado: conforme preferir
6. NÃO inicialize com README (já temos um)
7. Clique em **Create repository**

GitHub mostrará um URL como `https://github.com/IBAP-RJ/ibap-rj-site.git`

---

## 3️⃣ Clonar ou inicializar o repositório

### Opção A: Repositório vazio (primeira vez)

Na pasta do site, execute:

```bash
cd ibap-rj-site
git init
git add .
git commit -m "feat: inicial - site institucional redesign 2026"
git branch -M main
git remote add origin https://github.com/IBAP-RJ/ibap-rj-site.git
git push -u origin main
```

### Opção B: Repositório já existe no GitHub

```bash
cd sua-pasta
git clone https://github.com/IBAP-RJ/ibap-rj-site.git
cd ibap-rj-site
# coloque os arquivos aqui
git add .
git commit -m "feat: inicial - site institucional redesign 2026"
git push
```

---

## 4️⃣ Fazer commits e push

Depois que o repositório está sincronizado, sempre que fizer alterações:

```bash
# Ver status
git status

# Adicionar arquivos
git add .

# Commit com mensagem descritiva
git commit -m "fix: ajusta cores conforme marca oficial"

# Push para GitHub
git push
```

### Mensagens de commit úteis

```bash
# Feature nova
git commit -m "feat: adiciona seção de depoimentos"

# Correção
git commit -m "fix: corrige overflow em celular"

# Melhoria de CSS
git commit -m "style: refatora variáveis de cor"

# Documentação
git commit -m "docs: atualiza README com instruções"

# Performance
git commit -m "perf: otimiza carregamento de logos"
```

---

## 5️⃣ Usar SSH (recomendado)

Para não digitar senha toda vez, configure SSH no GitHub:

### Gerar chave SSH (se não tiver)

```bash
ssh-keygen -t ed25519 -C "seu-email@ibap-rj.org.br"
# Aperte Enter para tudo (sem passphrase, ou use uma)
```

### Adicionar chave pública no GitHub

1. Copie o conteúdo de `~/.ssh/id_ed25519.pub`
2. Vá a [github.com/settings/keys](https://github.com/settings/keys)
3. **New SSH key** > Cole > **Add SSH key**

### Usar URL SSH no repositório

```bash
git remote set-url origin git@github.com:IBAP-RJ/ibap-rj-site.git
git push
```

---

## 6️⃣ Branching (para trabalho em equipe)

Se múltiplas pessoas trabalham no site:

```bash
# Criar branch para uma feature
git checkout -b feat/nova-secao

# Fazer alterações, commits...
git add .
git commit -m "feat: adiciona seção de eventos"

# Push da branch
git push -u origin feat/nova-secao

# No GitHub, abrir Pull Request, revisar, e fazer merge para main
```

---

## 7️⃣ Estrutura de branches recomendada

| Branch | Função |
|---|---|
| `main` | Código pronto para produção |
| `develop` | Integração de features |
| `feat/*` | Novas features (ex: `feat/seção-blog`) |
| `fix/*` | Correções de bugs (ex: `fix/overflow-mobile`) |
| `style/*` | Ajustes visuais (ex: `style/cores-marca`) |

---

## 🔄 Workflow sugerido

1. **Create branch** a partir de `develop` ou `main`
2. **Code** localmente
3. **Commit** com mensagens claras
4. **Push** para GitHub
5. **Pull Request** no GitHub
6. **Review** em equipe
7. **Merge** para `main`

---

## 📋 Checklist antes de fazer push

- [ ] Todos os arquivos estão em `ibap-rj-site/` (index.html, css/, js/, etc)
- [ ] `images/LEIA-ME.txt` explica como baixar as imagens
- [ ] `.gitignore` está presente
- [ ] `README.md` está atualizado
- [ ] Nenhum arquivo confidencial foi incluído
- [ ] Git configurado com nome/email corretos
- [ ] Repositório no GitHub criado
- [ ] SSH configurado (opcional, mas recomendado)

---

## 🆘 Erros comuns

### Erro: "fatal: not a git repository"

```bash
# Solução: inicializar git na pasta
git init
```

### Erro: "Authentication failed"

```bash
# Solução: configurar SSH ou token de acesso
# Veja a seção 5 acima
```

### Erro: "Your branch and 'origin/main' have diverged"

```bash
# Solução: sincronizar com main remoto
git pull origin main
git push origin main
```

### Já dei commit, mas preciso corrigir

```bash
# Desfazer último commit (sem perder arquivo)
git reset --soft HEAD~1

# Desfazer e perder alterações
git reset --hard HEAD~1
```

---

## 📚 Referências

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Help](https://docs.github.com)
- [Conventional Commits](https://www.conventionalcommits.org) – padrão de mensagens

---

## ✅ Pronto!

Depois que fizer o push, o site estará em:  
**`https://github.com/IBAP-RJ/ibap-rj-site`**

Se o repositório tiver GitHub Pages habilitado, o site será automaticamente disponível em:  
**`https://ibap-rj.github.io/ibap-rj-site`**

Para ativar GitHub Pages:
1. Vá a Settings do repositório
2. Pages
3. Source: `main` branch
4. Pasta: `/ (root)`
5. Salve

Em poucos minutos o site estará online. 🚀
