// Função para enviar a mensagem no formulário de contato
document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede que a página recarregue ao enviar o formulário
    
    // Pega os valores preenchidos nos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    // Verifica se todos os campos estão preenchidos
    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('formulario-contato').reset(); // Limpa o formulário
    } else {
        alert('Por favor, preencha todos os campos.'); // Avisa se faltar algum campo
    }
});

// Acompanhamento das seções na tela para dar efeitos de animação
const sections = document.querySelectorAll('.section');

// Observa as seções para quando elas aparecerem na tela
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Adiciona a classe que torna a seção visível
        }
    });
}, { threshold: 0.5 }); 

// Inicia a observação das seções
sections.forEach(section => {
    observer.observe(section);
});
