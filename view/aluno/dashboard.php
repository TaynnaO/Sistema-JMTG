<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Área do Aluno</title>
</head>
<body>
    <h1>Bem-vindo, <?php echo htmlspecialchars($_SESSION['usuario']['Nome']); ?></h1>
    <p><a href="aluno_list.php">Gerenciar Alunos</a></p>
    <p><a href="../../logout.php">Sair</a></p>
</body>
</html>
