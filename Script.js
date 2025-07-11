document.addEventListener('DOMContentLoaded', () => {
    // ---- Navegação suave para as seções ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ---- Funcionalidade do Painel de Hábitos ----
    const newHabitInput = document.getElementById('newHabitInput');
    const addHabitBtn = document.getElementById('addHabitBtn');
    const habitsList = document.getElementById('habitsList');
    const noHabitsMessage = habitsList.querySelector('.no-habits-message');
    const quoteOfTheDayElement = document.getElementById('quoteOfTheDay');

    let habits = []; // Array para armazenar os hábitos

    // Frases motivacionais
    const motivationalQuotes = [
        "Pequenos passos todos os dias levam a grandes resultados.",
        "A jornada de mil milhas começa com um único passo.",
        "Não espere por uma oportunidade, crie-a.",
        "Seja a mudança que você deseja ver no mundo.",
        "A disciplina é a ponte entre metas e realizações.",
        "A persistência realiza o impossível.",
        "Comece onde você está. Use o que você tem. Faça o que você pode.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia."
    ];

    // Função para exibir a frase do dia (aleatória)
    function displayQuoteOfTheDay() {
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        quoteOfTheDayElement.textContent = motivationalQuotes[randomIndex];
    }

    // Carregar hábitos do localStorage
    function loadHabits() {
        const storedHabits = localStorage.getItem('habits');
        if (storedHabits) {
            habits = JSON.parse(storedHabits);
            renderHabits();
        } else {
            // Se não houver hábitos salvos, adicione alguns exemplos
            habits = [
                { id: 'h1', name: 'Beber 2L de água', streak: 0, lastCompleted: null },
                { id: 'h2', name: 'Fazer 30 min de exercício', streak: 0, lastCompleted: null },
                { id: 'h3', name: 'Ler 10 páginas de um livro', streak: 0, lastCompleted: null }
            ];
            saveHabits();
            renderHabits();
        }
    }

    // Salvar hábitos no localStorage
    function saveHabits() {
        localStorage.setItem('habits', JSON.stringify(habits));
    }

    // Gerar um ID único para o hábito
    function generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    // Renderizar (exibir) os hábitos na tela
    function renderHabits() {
        habitsList.innerHTML = ''; // Limpa a lista antes de renderizar
        if (habits.length === 0) {
            noHabitsMessage.style.display = 'block';
        } else {
            noHabitsMessage.style.display = 'none';
            habits.forEach(habit => {
                const habitItem = document.createElement('div');
                habitItem.classList.add('habit-item');
                habitItem.setAttribute('data-id', habit.id);

                // Verifica se o hábito foi concluído hoje para desabilitar o botão
                const today = new Date().toDateString();
                const isCompletedToday = habit.lastCompleted === today;

                if (isCompletedToday) {
                    habitItem.classList.add('completed');
                }

                habitItem.innerHTML = `
                    <span class="habit-name">${habit.name}</span>
                    <div class="status-info">
                        <span class="streak"> ${habit.streak}</span>
                        <button class="btn-complete" ${isCompletedToday ? 'disabled' : ''}>${isCompletedToday ? 'Concluído Hoje!' : 'Marcar como Feito'}</button>
                    </div>
                `;
                habitsList.appendChild(habitItem);

                // Adiciona evento de clique para o botão de marcar
                const completeButton = habitItem.querySelector('.btn-complete');
                completeButton.addEventListener('click', () => markHabitAsDone(habit.id));
            });
        }
    }

    // Adicionar novo hábito
    addHabitBtn.addEventListener('click', () => {
        const habitName = newHabitInput.value.trim();
        if (habitName) {
            const newHabit = {
                id: generateId(),
                name: habitName,
                streak: 0,
                lastCompleted: null
            };
            habits.push(newHabit);
            saveHabits();
            renderHabits();
            newHabitInput.value = ''; // Limpa o input
        } else {
            alert('Por favor, digite o nome do hábito!');
        }
    });

    // Marcar hábito como feito
    function markHabitAsDone(id) {
        const habitIndex = habits.findIndex(h => h.id === id);
        if (habitIndex > -1) {
            const today = new Date().toDateString();
            const habit = habits[habitIndex];

            // Verifica se já marcou hoje
            if (habit.lastCompleted === today) {
                // alert('Você já marcou este hábito como concluído hoje!'); // Removido para UX mais suave
                return;
            }

            // Lógica para streak:
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayString = yesterday.toDateString();

            if (habit.lastCompleted === yesterdayString) {
                // Se o último foi ontem, continua a sequência
                habit.streak++;
            } else {
                // Se não foi ontem, reinicia a sequência (a menos que seja o primeiro dia)
                habit.streak = 1;
            }

            habit.lastCompleted = today;
            saveHabits();
            renderHabits(); // Renderiza novamente para atualizar o status e a streak
        }
    }

    // Inicialização da página
    displayQuoteOfTheDay(); // Exibe a frase inicial
    loadHabits(); // Carrega e exibe os hábitos
});
