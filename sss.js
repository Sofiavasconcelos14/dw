    <script>
        document.getElementById("btnLogin").addEventListener("click", function () {
            const usuario = document.getElementById("usuario").value.trim();
            const senha = document.getElementById("senha").value.trim();

            if (usuario === "" || senha === "") {
                alert(" Por favor, preencha todos os campos!");
                return;
            }

            // Simulação de login
            if (usuario === "admin" && senha === "1234") {
                alert(" Login realizado com sucesso!");
                // Redirecionar para outra página (exemplo)
                window.location.href = "dashboard.html";
            } else {
                alert(" Usuário ou senha incorretos!");
            }
        });
    </script>