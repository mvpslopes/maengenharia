# 🚀 Passo a Passo - Fazer o Formulário Funcionar

## ✅ Checklist Rápido

Siga estes passos na ordem:

### 1️⃣ Criar Conta no EmailJS (5 minutos)

1. Acesse: https://www.emailjs.com
2. Clique em **Sign Up** (canto superior direito)
3. Crie uma conta (pode usar Google/GitHub ou e-mail)
4. Confirme seu e-mail se necessário
5. Faça login

### 2️⃣ Configurar Serviço SMTP (10 minutos)

1. No painel do EmailJS, clique em **Email Services** (menu lateral)
2. Clique no botão **Add New Service**
3. Escolha **SMTP** (não escolha Gmail/Outlook)
4. Preencha o formulário:

   ```
   Service Name: Hostinger SMTP
   Host: smtp.hostinger.com
   Port: 587
   Username: contato@maengenhariaintegrada.com.br
   Password: 6|Ei~7uC
   Secure: TLS
   ```

5. Clique em **Create Service**
6. ⚠️ **IMPORTANTE**: Copie o **Service ID** que aparece (algo como `service_abc123`)
   - Anote em um lugar seguro!

### 3️⃣ Criar Template de E-mail (10 minutos)

1. No EmailJS, clique em **Email Templates** (menu lateral)
2. Clique em **Create New Template**
3. Preencha:

   **Template Name:** `contact_form`
   
   **Subject:** `Nova Mensagem de Contato - {{project_type}} - {{from_name}}`
   
   **To Email:** `contato@maengenhariaintegrada.com.br`
   
   **From Name:** `M.A Engenharia - Site`
   
   **From Email:** `contato@maengenhariaintegrada.com.br`
   
   **Reply To:** `{{reply_to}}`

4. No campo **Content**, escolha **HTML** e cole este código:

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

5. Clique em **Save**
6. ⚠️ **IMPORTANTE**: Copie o **Template ID** que aparece (algo como `template_xyz789`)
   - Anote junto com o Service ID!

### 4️⃣ Obter Public Key (2 minutos)

1. No EmailJS, clique em **Account** (menu superior direito)
2. Vá em **General**
3. Procure por **Public Key**
4. ⚠️ **IMPORTANTE**: Copie a Public Key (algo como `abcdefghijklmnop`)
   - Anote junto com os outros IDs!

### 5️⃣ Criar Arquivo .env (3 minutos)

1. Na raiz do projeto (mesma pasta onde está o `package.json`), crie um arquivo chamado `.env`
2. Abra o arquivo `.env` e cole este conteúdo:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

3. **SUBSTITUA** os valores pelos IDs que você copiou:
   - `service_abc123` → seu Service ID real
   - `template_xyz789` → seu Template ID real
   - `abcdefghijklmnop` → sua Public Key real

4. Salve o arquivo

### 6️⃣ Reiniciar o Servidor (1 minuto)

1. Pare o servidor se estiver rodando (Ctrl+C no terminal)
2. Inicie novamente:
   ```bash
   npm run dev
   ```

### 7️⃣ Testar o Formulário (2 minutos)

1. Acesse o site no navegador
2. Vá até a seção de contato
3. Preencha o formulário com dados de teste:
   - Nome: Teste
   - E-mail: seu-email@teste.com
   - Telefone: (35) 99999-9999
   - Tipo de Projeto: Escolha qualquer um
   - Mensagem: Esta é uma mensagem de teste
   - Marque a checkbox de privacidade
4. Clique em **Enviar Mensagem**
5. Verifique se aparece a mensagem de sucesso
6. Verifique a caixa de entrada de `contato@maengenhariaintegrada.com.br`

## ✅ Pronto!

Se tudo funcionou, você verá:
- ✅ Mensagem de sucesso no formulário
- ✅ E-mail chegando em `contato@maengenhariaintegrada.com.br`

## 🆘 Se não funcionar:

1. **Verifique o console do navegador** (F12 → Console)
   - Veja se há erros em vermelho
   
2. **Verifique se o arquivo .env está correto**
   - Os IDs devem estar sem espaços
   - Não deve ter aspas
   
3. **Teste a porta SMTP**
   - Se porta 587 não funcionar, tente 465 (SSL) no EmailJS
   
4. **Verifique a caixa de spam**
   - O e-mail pode ter ido para spam

## 📞 Precisa de ajuda?

Se tiver algum erro específico, me envie:
- A mensagem de erro do console (F12)
- O que aconteceu quando tentou enviar
