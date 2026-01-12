<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Verifica se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// Recebe os dados do formulário
$data = json_decode(file_get_contents('php://input'), true);

// Valida os dados obrigatórios
$required = ['name', 'email', 'phone', 'projectType', 'message'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Campo obrigatório faltando: $field"]);
        exit;
    }
}

// Sanitiza os dados
$name = htmlspecialchars(trim($data['name']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone']));
$projectType = htmlspecialchars(trim($data['projectType']));
$message = htmlspecialchars(trim($data['message']));

// Valida o e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'E-mail inválido']);
    exit;
}

// Configurações do e-mail
$to = 'contato@maengenhariaintegrada.com.br';
$subject = "Nova Mensagem de Contato - $projectType - $name";

// Cria o corpo do e-mail em HTML
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
        .header { background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
        .header h1 { color: #f5a900; margin: 0; font-size: 28px; font-weight: bold; }
        .header p { color: #ffffff; margin: 10px 0 0 0; font-size: 14px; }
        .content { background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .info-box { background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f5a900; }
        .info-box h2 { color: #1f2937; font-size: 20px; margin: 0 0 15px 0; font-weight: bold; }
        .info-row { padding: 8px 0; }
        .info-label { color: #6b7280; font-weight: bold; width: 150px; display: inline-block; }
        .info-value { color: #1f2937; }
        .message-box { background-color: #ffffff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb; }
        .message-box h2 { color: #1f2937; font-size: 20px; margin: 0 0 15px 0; font-weight: bold; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; }
        .footer p { color: #6b7280; font-size: 14px; margin: 5px 0; }
        .copyright { text-align: center; margin-top: 20px; padding: 15px; background-color: #1f2937; border-radius: 8px; }
        .copyright p { color: #9ca3af; font-size: 12px; margin: 0; }
        a { color: #f5a900; text-decoration: none; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>M.A ENGENHARIA</h1>
            <p>Nova Mensagem do Formulário de Contato</p>
        </div>
        
        <div class='content'>
            <p>Olá, equipe M.A Engenharia!</p>
            
            <p>Você recebeu uma nova mensagem através do formulário de contato do site:</p>
            
            <div class='info-box'>
                <h2>Informações do Cliente</h2>
                <div class='info-row'>
                    <span class='info-label'>Nome:</span>
                    <span class='info-value'>$name</span>
                </div>
                <div class='info-row'>
                    <span class='info-label'>E-mail:</span>
                    <span class='info-value'><a href='mailto:$email'>$email</a></span>
                </div>
                <div class='info-row'>
                    <span class='info-label'>Telefone:</span>
                    <span class='info-value'><a href='tel:$phone'>$phone</a></span>
                </div>
                <div class='info-row'>
                    <span class='info-label'>Tipo de Projeto:</span>
                    <span class='info-value'>$projectType</span>
                </div>
            </div>
            
            <div class='message-box'>
                <h2>Mensagem</h2>
                <p style='white-space: pre-wrap;'>$message</p>
            </div>
            
            <div class='footer'>
                <p>Esta mensagem foi enviada automaticamente através do formulário de contato do site.</p>
                <p>Por favor, responda diretamente ao e-mail do cliente: <a href='mailto:$email'><strong>$email</strong></a></p>
            </div>
        </div>
        
        <div class='copyright'>
            <p>© " . date('Y') . " M.A Engenharia - Todos os direitos reservados</p>
        </div>
    </div>
</body>
</html>
";

// Headers do e-mail
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: M.A Engenharia - Site <contato@maengenhariaintegrada.com.br>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Tenta enviar o e-mail
if (mail($to, $subject, $emailBody, $headers)) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erro ao enviar e-mail. Tente novamente ou entre em contato pelo WhatsApp.'
    ]);
}
?>
