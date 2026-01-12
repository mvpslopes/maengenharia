# ⚡ Configuração Rápida - EmailJS com Hostinger

## 📧 Credenciais do E-mail

**E-mail:** contato@maengenhariaintegrada.com.br  
**Senha:** (use a senha que você me informou)

## 🚀 Passos Rápidos

### 1. Criar Conta no EmailJS
- Acesse: https://www.emailjs.com
- Crie uma conta gratuita

### 2. Configurar Serviço SMTP (Hostinger)

1. No EmailJS, vá em **Email Services** → **Add New Service**
2. Escolha **SMTP**
3. Preencha com estas informações:

```
Service Name: Hostinger SMTP
Host: smtp.hostinger.com
Port: 587
Username: contato@maengenhariaintegrada.com.br
Password: [sua senha do e-mail]
Secure: TLS
```

**OU** tente com:
```
Port: 465
Secure: SSL
```

4. Clique em **Create Service**
5. **Copie o Service ID** (algo como: `service_xxxxx`)

### 3. Criar Template

1. Vá em **Email Templates** → **Create New Template**
2. **Template Name:** `contact_form_ma_engenharia`
3. **Subject:** `Nova Mensagem de Contato - {{project_type}} - {{from_name}}`
4. **To Email:** `contato@maengenhariaintegrada.com.br`
5. **From Name:** `M.A Engenharia - Site`
6. **From Email:** `contato@maengenhariaintegrada.com.br`
7. **Reply To:** `{{reply_to}}`

8. **Content (HTML):** Cole o template HTML do arquivo `CONFIGURACAO_EMAILJS.md`

9. Salve e **copie o Template ID** (algo como: `template_xxxxx`)

### 4. Obter Public Key

1. Vá em **Account** → **General**
2. Copie sua **Public Key** (algo como: `xxxxxxxxxxxxx`)

### 5. Criar Arquivo .env

Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

Substitua os valores pelos IDs que você copiou.

### 6. Testar

1. Reinicie o servidor: `npm run dev`
2. Preencha o formulário de contato
3. Verifique se o e-mail chegou em `contato@maengenhariaintegrada.com.br`

## ⚠️ Importante

- A senha do e-mail é usada **APENAS** no EmailJS (painel web), nunca no código
- O arquivo `.env` está no `.gitignore` e não será commitado
- Mantenha suas credenciais seguras

## 🆘 Problemas?

**E-mail não chega?**
- Verifique se a porta 587 (TLS) funciona, senão tente 465 (SSL)
- Confirme que a senha está correta
- Verifique a caixa de spam
- Veja o console do navegador (F12) para erros

**Erro de autenticação?**
- Verifique se o username está correto: `contato@maengenhariaintegrada.com.br`
- Confirme que a senha está correta
- Tente alternar entre TLS (porta 587) e SSL (porta 465)
