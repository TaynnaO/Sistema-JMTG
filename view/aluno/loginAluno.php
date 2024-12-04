<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="../../assets/css/styleLoginAluno.css" />
    <title>Login do Aluno</title>
  </head>
  <body>
    <div class="main-login">
      <div class="left-login">
        <h1>Faça login<br>E descubra um<br>Mundo de Possibilidades</h1>
      </div>
      <div class="right-login">
        <div class="logo">
          <img src="../../assets/img/jmtg__2_-removebg-preview.png" alt="logo">
        </div>
        <form class="card-login" action="../../auth/loginAluno.php" method="post">
          <h1>LOGIN</h1>
          <div class="textfield">
            <label for="matricula">Usuário:</label>
            <input type="text" name="Matricula" placeholder="Matrícula" required />
            <i class="bx bxs-user"></i>
          </div>
          <div class="textfield">
            <label for="senha">Senha: </label>
            <input type="password" name="senha" placeholder="Senha" required />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div class="forgot_password">
            <label><input type="checkbox" />Lembrar</label>
          </div>
          <div class="forgot_password">
            <a href="#"> Esqueci minha senha! </a>
          </div>
          <button type="submit" class="btn-login" onclick="login()">Login</button>
          <div class="register-link">
            <p>Não tem acesso? <a href="#">Registre-se</a></p>
          </div>
          <div class="admin-login">
            <a href="#">Entrar como Administrador</a>
          </div>
          <div class="voltar">
            <p><a href="#">Voltar</a></p>
          </div>
        </form>
      </div>
    </div>
    <?php
        if($_SESSION && $_SESSION['erro_alert']!=''){
            echo ' <script> ';
            echo ' alert("'.$_SESSION['erro_alert'].'"); ';
            echo ' </script> ';
        }
        if($_SESSION && $_SESSION['sucesso']!=''){
            echo ' <script> ';
            echo ' alert("'.$_SESSION['sucesso'].'"); ';
            echo ' </script> ';
        }
        session_destroy();
    ?>
  </body>
</html>
