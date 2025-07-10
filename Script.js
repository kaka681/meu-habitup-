/* Importação de Fontes (Google Fonts) */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');

/* Variáveis de Cores (Paleta) */
:root {
    --primary-orange: #FF6600; /* Laranja Vibrante - Ação, Entusiasmo */
    --secondary-blue: #00B2EE; /* Azul Elétrico - Confiança, Foco */
    --accent-green: #27AE60;   /* Verde Esmeralda - Crescimento, Saúde */
    --accent-yellow: #FFDD00;  /* Amarelo Suave - Otimismo, Alegria */
    --text-dark: #333333;      /* Cinza Grafite - Textos principais */
    --text-light: #666666;     /* Cinza médio - Textos secundários */
    --background-light: #F9F9F9; /* Fundo claro */
    --border-light: #EEEEEE;   /* Borda clara */
    --white: #FFFFFF;
}

/* Reset Básico e Estilos Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--background-light);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    text-decoration: none;
    color: var(--secondary-blue);
    transition: color 0.3s ease;
}

a:hover {
    color: var(--primary-orange);
}

h1, h2, h3, h4 {
    font-family: 'Montserrat', sans-serif;
    color: var(--text-dark);
    margin-bottom: 15px;
}

h2 {
    font-size: 2.8em;
    font-weight: 700;
    line-height: 1.2;
    color: var(--primary-orange); /* Título principal em laranja para impacto */
}

h3 {
    font-size: 2em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
}

/* Botões */
.btn-primary {
    display: inline-block;
    background-color: var(--primary-orange);
    color: var(--white);
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 0.3s ease, transform 0.2s ease;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(255, 102, 0, 0.3); /* Sutil sombra para destacar */
}

.btn-primary:hover {
    background-color: #E65C00; /* Laranja um pouco mais escuro no hover */
    transform: translateY(-2px);
}

/* Header */
.header {
    background-color: var(--white);
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8em;
    font-weight: 700;
    color: var(--secondary-blue); /* Logo em azul para representar foco e estabilidade */
}

.nav ul {
    list-style: none;
    display: flex;
}

.nav ul li {
    margin-left: 30px;
}

.nav ul li a {
    color: var(--text-dark);
    font-weight: 500;
    position: relative;
}

.nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: var(--primary-orange);
    transition: width 0.3s ease;
}

.nav ul li a:hover::after {
    width: 100%;
    left: 0;
    background: var(--primary-orange);
}

/* Hero Section */
.hero-section {
    background: linear-gradient(to right, var(--secondary-blue) 0%, #00CFFF 100%); /* Gradiente azul para calma e foco */
    color: var(--white);
    padding: 80px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-section .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    flex-wrap: wrap; /* Permite que o conteúdo se ajuste em telas menores */
}

.hero-content {
    flex: 1;
    min-width: 300px;
    text-align: left;
}

.hero-content h2 {
    color: var(--white); /* Título em branco no hero para contraste */
    font-size: 3.5em; /* Maior para impacto */
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.2em;
    margin-bottom: 30px;
    opacity: 0.9;
}

.hero-image {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px; /* Bordas arredondadas para a imagem */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}


/* Features Section */
.features-section {
    padding: 60px 0;
    background-color: var(--white);
    text-align: center;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 30px;
}

.feature-item {
    background-color: var(--background-light);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.feature-item .icon {
    font-size: 3em;
    margin-bottom: 15px;
    display: block;
    color: var(--accent-green); /* Ícones de feature em verde para crescimento */
}

.feature-item h4 {
    font-size: 1.4em;
    font-weight: 600;
    color: var(--primary-orange); /* Títulos das features em laranja */
    margin-bottom: 10px;
}

.feature-item p {
    color: var(--text-light);
}

/* Footer */
.footer {
    background-color: var(--text-dark);
    color: var(--white);
    padding: 30px 0;
    text-align: center;
    font-size: 0.9em;
}

/* Dashboard Section */
.dashboard-section {
    padding: 60px 0;
    background-color: var(--background-light);
}

.dashboard-section h3 {
    color: var(--secondary-blue); /* Título do dashboard em azul para foco */
}

.dashboard-content {
    background-color: var(--white);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.habit-input-area {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap; /* Para responsividade */
}

.habit-input-area input[type="text"] {
    flex-grow: 1;
    padding: 12px 15px;
    border: 2px solid var(--border-light);
    border-radius: 8px;
    font-size: 1em;
    outline: none;
    transition: border-color 0.3s ease;
}

.habit-input-area input[type="text"]:focus {
    border-color: var(--secondary-blue);
}

.habit-input-area .btn-primary {
    padding: 12px 25px; /* Ajuste para o botão do input */
    font-size: 1em;
}

.habits-list {
    min-height: 100px; /* Garante que a lista tenha um espaço mínimo */
}

.no-habits-message {
    text-align: center;
    color: var(--text-light);
    font-style: italic;
    padding: 20px;
    border: 1px dashed var(--border-light);
    border-radius: 8px;
}

.habit-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-light);
    padding: 15px 20px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: background-color 0.3s ease;
}

.habit-item.completed {
    background-color: #E6F7ED; /* Verde muito claro para concluído */
    border-left: 5px solid var(--accent-green);
}

.habit-item span.habit-name {
    font-weight: 600;
    color: var(--text-dark);
    flex-grow: 1;
    margin-right: 15px;
}

.habit-item .status-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.habit-item .streak {
    background-color: var(--accent-yellow); /* Amarelo para destacar streak */
    color: var(--text-dark);
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    gap: 3px;
}

.habit-item .streak::before {
    content: '🔥'; /* Ícone de fogo para streak */
    font-size: 0.8em;
}

.habit-item .btn-complete {
    background-color: var(--accent-green);
    color: var(--white);
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9em;
    transition: background-color 0.3s ease;
}

.habit-item .btn-complete:hover {
    background-color: #219B53; /* Verde mais escuro no hover */
}

.habit-item .btn-complete:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.motivator-area {
    text-align: center;
    padding: 20px;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.motivator-area h4 {
    color: var(--primary-orange);
    margin-bottom: 10px;
}

.motivator-area .quote {
    font-size: 1.1em;
    font-style: italic;
    color: var(--text-light);
}

/* Responsividade para o Dashboard */
@media (max-width: 600px) {
    .habit-input-area {
        flex-direction: column;
    }

    .habit-input-area input[type="text"] {
        margin-bottom: 10px;
    }

    .habit-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .habit-item .status-info {
        width: 100%;
        justify-content: space-between;
    }

    .habit-item .btn-complete {
        width: 100%;
        text-align: center;
    }
}
