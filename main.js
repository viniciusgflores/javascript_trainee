let display = document.getElementById('display');

// Função para adicionar números e operações ao display
function atualizarDisplay(value) {
    // Se o display está com '0', substitui pelo primeiro valor
    if (display.innerHTML === '0') {
        display.innerHTML = value;
    } else {
        // Adiciona o valor pressionado no display
        display.innerHTML += value;
    }
}

// Função para limpar o display
function limparDisplay() {
    display.innerHTML = '0';
}

// Função para calcular e mostrar o resultado
function calcular() {
    try {
        // Substitui 'x' por '*' e '÷' por '/' para operações matemáticas padrão
        let expressao = display.innerHTML.replace('x', '*').replace('÷', '/');
        
        // Avalia a expressão matemática do display
        let resultado = eval(expressao);

        // Se o resultado não for um número, exibe 'Error'
        if (isNaN(resultado)) {
            display.innerHTML = 'Error';
        } else {
            // Caso contrário, exibe o resultado
            display.innerHTML = resultado;
        }
    } catch (e) {
        // Se houver um erro, exibe 'Error'
        display.innerHTML = 'Error';
    }
}

// Adiciona eventos a todos os botões
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerHTML;

        // Se o botão pressionado for '=', realiza o cálculo
        if (value === "=") {
            calcular();
        }
        // Se o botão pressionado for 'Limpar', limpa o display
        else if (value === "Limpar") {
            limparDisplay();
        }
        // Caso contrário, adiciona o valor do botão ao display
        else {
            atualizarDisplay(value);
        }
    });
});
