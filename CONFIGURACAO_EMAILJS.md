# 📧 Configuração do Envio de E-mails com EmailJS

Este guia explica como configurar o formulário de contato para enviar e-mails para **contato@maengenhariaintegrada.com.br**.

## 🚀 Passo a Passo

### 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com](https://www.emailjs.com)
2. Crie uma conta gratuita (200 e-mails/mês grátis)
3. Faça login no painel

### 2. Configurar Serviço de E-mail (Hostinger)

Como você criou o e-mail na Hostinger, siga estes passos:

1. No painel do EmailJS, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha **SMTP** (não Gmail/Outlook)
4. Preencha as informações:
   - **Service Name**: `Hostinger SMTP` (ou qualquer nome)
   - **Host**: `smtp.hostinger.com`
   - **Port**: `465` (SSL) ou `587` (TLS)
   - **Username**: `contato@maengenhariaintegrada.com.br`
   - **Password**: A senha do seu e-mail na Hostinger
   - **Secure**: Selecione **SSL** ou **TLS** conforme a porta escolhida
5. Clique em **Create Service**
6. **Anote o Service ID** que será gerado

**Nota**: Se você não souber as configurações SMTP da Hostinger:
- Acesse o painel da Hostinger
- Vá em **E-mails** → **Configurações de E-mail**
- Procure por "Configurações SMTP" ou "Configurações do Cliente de E-mail"
- Use essas informações no EmailJS

### 3. Criar Template de E-mail

1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use o seguinte template:

**Template Name:** `contact_form`

**Subject:** `Nova Mensagem de Contato - {{project_type}} - {{from_name}}`

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
  <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: #f5a900; margin: 0; font-size: 28px; font-weight: bold;">M.A ENGENHARIA</h1>
    <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">Nova Mensagem do Formulário de Contato</p>
  </div>
  
  <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      Olá, equipe M.A Engenharia!
    </p>
    
    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      Você recebeu uma nova mensagem através do formulário de contato do site:
    </p>
    
    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f5a900;">
      <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 15px 0; font-weight: bold;">Informações do Cliente</h2>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-weight: bold; width: 150px;">Nome:</td>
          <td style="padding: 8px 0; color: #1f2937;">{{from_name}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">E-mail:</td>
          <td style="padding: 8px 0; color: #1f2937;">
            <a href="mailto:{{from_email}}" style="color: #f5a900; text-decoration: none;">{{from_email}}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Telefone:</td>
          <td style="padding: 8px 0; color: #1f2937;">{{phone}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Tipo de Projeto:</td>
          <td style="padding: 8px 0; color: #1f2937;">{{project_type}}</td>
        </tr>
      </table>
    </div>
    
    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
      <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 15px 0; font-weight: bold;">Mensagem</h2>
      <p style="color: #374151; font-size: 15px; line-height: 1.8; margin: 0; white-space: pre-wrap;">{{message}}</p>
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center;">
      <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
        Esta mensagem foi enviada automaticamente através do formulário de contato do site.
      </p>
      <p style="color: #6b7280; font-size: 14px; margin: 0;">
        Por favor, responda diretamente ao e-mail do cliente: 
        <a href="mailto:{{from_email}}" style="color: #f5a900; text-decoration: none; font-weight: bold;">{{from_email}}</a>
      </p>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 20px; padding: 15px; background-color: #1f2937; border-radius: 8px;">
    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
      © 2024 M.A Engenharia - Todos os direitos reservados
    </p>
  </div>
</div>
```

4. **Configure o e-mail de destino:**
   - No campo **To Email**, coloque: `contato@maengenhariaintegrada.com.br`
   - Salve o template
   - **Anote o Template ID** que será gerado

### 4. Obter Public Key

1. Vá em **Account** → **General**
2. Copie sua **Public Key**

### 5. Configurar Variáveis de Ambiente

1. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edite o arquivo `.env` e preencha com suas credenciais:
   ```
   VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
   ```

### 6. Testar o Formulário

1. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Preencha o formulário de contato no site
3. Verifique se o e-mail chegou em **contato@maengenhariaintegrada.com.br**

## 📝 Variáveis do Template

O template usa as seguintes variáveis que são enviadas automaticamente:

- `{{from_name}}` - Nome do cliente
- `{{from_email}}` - E-mail do cliente
- `{{phone}}` - Telefone do cliente
- `{{project_type}}` - Tipo de projeto selecionado
- `{{message}}` - Mensagem do cliente
- `{{to_email}}` - E-mail de destino (contato@maengenhariaintegrada.com.br)

## ⚠️ Importante

- O arquivo `.env` está no `.gitignore` e não será commitado
- Mantenha suas credenciais seguras
- O plano gratuito do EmailJS permite 200 e-mails/mês
- Para produção, considere usar um plano pago se necessário

## 🆘 Problemas Comuns

**E-mail não está chegando?**
- Verifique se as credenciais no `.env` estão corretas
- Confirme que o e-mail de destino está configurado no template
- Verifique a caixa de spam
- Veja os logs no console do navegador (F12)

**Erro de autenticação?**
- Verifique se a Public Key está correta
- Confirme que o serviço de e-mail está ativo no EmailJS
- Verifique se a senha do e-mail da Hostinger está correta
- Confirme se as configurações SMTP (host, porta, SSL/TLS) estão corretas

**E-mail da Hostinger não funciona?**
- Verifique se o e-mail está ativo no painel da Hostinger
- Confirme que a senha está correta
- Tente usar a porta 587 com TLS primeiro (mais comum)
- Se não funcionar, tente a porta 465 com SSL
- Verifique se não há firewall bloqueando as conexões SMTP

## 📞 Suporte

Para mais informações, consulte a [documentação do EmailJS](https://www.emailjs.com/docs/).
