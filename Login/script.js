// Função de simulação de verificação de login (substitua isso com uma lógica de servidor real)
function verificarLogin(usuario, senha) {
    // Dados de exemplo (simulando um banco de dados)
    const usuariosBD = [
        { usuario: 'usuario1', senha: 'senha123' },
        { usuario: 'usuario2', senha: 'senha456' }
        // Adicione mais dados conforme necessário
    ];

    return new Promise((resolve, reject) => {
        // Simulando um atraso de 1 segundo para simular uma verificação assíncrona
        setTimeout(() => {
            const usuarioEncontrado = usuariosBD.find(
                user => user.usuario === usuario && user.senha === senha
            );

            if (usuarioEncontrado) {
                resolve({ autenticado: true });
            } else {
                resolve({ autenticado: false });
            }
        }, 1000); // Simulação de tempo de espera de 1 segundo (pode ser removido em uma implementação real)
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const formEntrar = document.getElementById('entrar');

    formEntrar.addEventListener('submit', function (event) {
        event.preventDefault();

        const usuario = document.getElementById('usuario-entrar').value;
        const senha = document.getElementById('senha-entrar').value;

        // Aqui, você faria uma requisição ao servidor para verificar os dados no banco de dados
        verificarLogin(usuario, senha)
            .then(function (resposta) {
                if (resposta.autenticado) {
                    alert('Login bem-sucedido!');
                    // Redirecionar o usuário para uma página de dashboard, por exemplo
                    window.location.href = 'C:/Users/Cliente/Documents/site_recycler/index.html';
                } else {
                    alert('Credenciais inválidas. Tente novamente.');
                }
            })
            .catch(function (erro) {
                console.error('Erro ao verificar login:', erro);
                alert('Erro ao verificar login. Tente novamente mais tarde.');
            });
    });
});
