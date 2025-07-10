document.addEventListener('DOMContentLoaded', () => {
    const primaryButton = document.querySelector('.btn-primary');
    if (primaryButton) {
        primaryButton.addEventListener('click', () => {
            alert('Excelente! Em breve você poderá criar seus primeiros hábitos aqui.');
            // No futuro, aqui você poderia redirecionar para uma página de cadastro
            // ou para a seção "Como Funciona" do site.
            // window.location.href = '#como-funciona';
        });
    }
});
