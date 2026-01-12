# 📧 Configuração do Formulário - Usando Hostinger Diretamente

Esta solução usa a própria hospedagem da Hostinger para enviar e-mails, **sem precisar do EmailJS**!

## ✅ Vantagens

- ✅ Não precisa de serviços externos (EmailJS)
- ✅ Usa a própria hospedagem da Hostinger
- ✅ Mais simples e direto
- ✅ Sem limites de e-mails (dependendo do seu plano)
- ✅ E-mails enviados diretamente do seu servidor

## 🚀 Passo a Passo

### 1️⃣ Fazer Upload do Arquivo PHP

1. Acesse o **File Manager** no painel da Hostinger
2. Navegue até a pasta `public_html` (ou a pasta raiz do seu site)
3. Crie uma pasta chamada `api` (se não existir)
4. Faça upload do arquivo `send-email.php` que está na pasta `api/` do projeto
5. Certifique-se de que o arquivo tem permissões de leitura (644)

### 2️⃣ Configurar a URL da API

1. No projeto, crie um arquivo `.env` na raiz (se não existir)
2. Adicione a URL completa do seu arquivo PHP:

```env
VITE_API_URL=https://maengenhariaintegrada.com.br/api/send-email.php
```

**Importante**: Substitua `maengenhariaintegrada.com.br` pelo seu domínio real!

### 3️⃣ Testar o Formulário

1. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse o site e preencha o formulário de contato
3. Envie uma mensagem de teste
4. Verifique se o e-mail chegou em `contato@maengenhariaintegrada.com.br`

## 🔧 Configuração Avançada (Opcional)

Se a função `mail()` do PHP não funcionar, você pode usar PHPMailer com SMTP da Hostinger.

### Instalar PHPMailer via Composer

1. No File Manager da Hostinger, acesse a pasta `api`
2. Crie um arquivo `composer.json`:

```json
{
    "require": {
        "phpmailer/phpmailer": "^6.8"
    }
}
```

3. Execute `composer install` via SSH ou Terminal da Hostinger

### Usar PHPMailer (Alternativa)

Se precisar usar PHPMailer, posso criar uma versão alternativa do arquivo PHP. Me avise!

## ⚠️ Importante

- O arquivo PHP deve estar na pasta `public_html/api/` (ou equivalente)
- Certifique-se de que o PHP está habilitado na Hostinger
- Verifique se a função `mail()` está habilitada no PHP
- Se não funcionar, pode ser necessário configurar SMTP no PHP

## 🆘 Problemas Comuns

**E-mail não chega?**
- Verifique se o arquivo PHP está no lugar certo
- Confirme que a URL no `.env` está correta
- Veja os logs de erro do PHP na Hostinger
- Verifique a caixa de spam

**Erro 404?**
- Confirme que o caminho do arquivo está correto
- Verifique se a URL no `.env` está completa e correta

**Erro 500?**
- Verifique as permissões do arquivo PHP (deve ser 644)
- Veja os logs de erro do PHP no painel da Hostinger
- Confirme que o PHP está habilitado

## 📝 Estrutura de Pastas na Hostinger

```
public_html/
├── index.html (ou index.php)
├── api/
│   └── send-email.php  ← Este arquivo aqui!
└── ...
```

## ✅ Pronto!

Após fazer o upload do arquivo PHP e configurar a URL, o formulário funcionará automaticamente!
