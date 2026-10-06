# 📤 Push Rápido – Copie e Cole

## Pré-requisito

Você precisa ter:
1. **Git instalado** → https://git-scm.com
2. **Repositório criado no GitHub** → https://github.com/new
3. **URL do seu repositório** (ex: `https://github.com/IBAP-RJ/ibap-rj-site.git`)

## Passo 1: Configure Git (primeira vez apenas)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@ibap-rj.org.br"
```

## Passo 2: Abra o terminal na pasta `ibap-rj-site/`

Mac/Linux:
```bash
cd caminho/para/ibap-rj-site
```

Windows (PowerShell):
```powershell
cd C:\caminho\para\ibap-rj-site
```

## Passo 3: Copie e cole exatamente isto (primeira vez)

```bash
git init
git add .
git commit -m "feat: inicial - site institucional redesign 2026"
git branch -M main
git remote add origin https://github.com/IBAP-RJ/ibap-rj-site.git
git push -u origin main
```

**Troque** `https://github.com/IBAP-RJ/ibap-rj-site.git` pela URL do seu repositório.

## Passo 4: Próximos updates

Sempre que fizer mudanças:

```bash
git add .
git commit -m "descricao do que foi alterado"
git push
```

## Exemplos de mensagens úteis

```bash
# Ajustar cores
git commit -m "style: atualiza cores conforme marca oficial"

# Novo conteúdo
git commit -m "content: adiciona publicações do boletim"

# Correção
git commit -m "fix: corrige overflow em celular"

# Documentação
git commit -m "docs: atualiza instruções do README"
```

## ⚠️ Se der erro na autenticação

GitHub desativou senhas em 2021. Use uma destas opções:

### Opção A: Token de acesso pessoal (rápido)

1. Acesse https://github.com/settings/tokens
2. Gere um novo token com permissão `repo`
3. Copie o token
4. Quando Git pedir senha, cole o token

### Opção B: SSH (melhor a longo prazo)

```bash
# Gerar chave (aperte Enter para tudo)
ssh-keygen -t ed25519 -C "seu-email@ibap-rj.org.br"

# Copiar chave pública
cat ~/.ssh/id_ed25519.pub
# (ou em Windows: type %USERPROFILE%\.ssh\id_ed25519.pub)
```

1. Acesse https://github.com/settings/keys
2. **New SSH key**
3. Cole a chave pública
4. Mude a URL do repositório:

```bash
git remote set-url origin git@github.com:IBAP-RJ/ibap-rj-site.git
git push
```

## ✅ Sucesso!

Site estará em: `https://github.com/IBAP-RJ/ibap-rj-site`

Para colocar online com GitHub Pages:
1. Vá a Settings do repositório
2. **Pages**
3. Source: `main` branch, pasta `/ (root)`
4. Salve

Em 5 minutos estará em: `https://ibap-rj.github.io/ibap-rj-site`

---

Dúvidas? Veja `GITHUB_PUSH_GUIDE.md` para mais detalhes.
