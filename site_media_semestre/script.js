function calcularNotaFinal() {
    // Receber os valores das notas
    const A1 = parseFloat(document.getElementById('A1').value);
    const A2 = parseFloat(document.getElementById('A2').value);
    const A3 = parseFloat(document.getElementById('A3').value);
    const A4 = parseFloat(document.getElementById('A4').value);
    const A5 = parseFloat(document.getElementById('A5').value);

    // Verificar se os valores estão entre 0 e 10
    if (A1 > 10 || A1 < 0 || A2 > 10 || A2 < 0 || A3 > 10 || A3 < 0 || A4 > 10 || A4 < 0 || A5 > 10 || A5 < 0) {
        alert('Por favor, insira valores entre 0 e 10 para todas as notas.');
        return;
    }

    // Calcular a média dos quatro valores e multiplicar por 0.4
    const media = (A1 + A2 + A3 + A4) / 4;
    const N1 = media * 0.4;

    // Multiplicar o valor da A5 por 0.6
    const N2 = A5 * 0.6;

    // Somar N1 e N2 para obter o resultado final
    const notaFinal = N1 + N2;

    // Exibir o resultado final
    const notaFinalElement = document.getElementById('notaFinal');
    document.getElementById('notaN1').innerText = `A nota da N1 é: ${N1.toFixed(2)}`;
    notaFinalElement.innerText = `A nota final é: ${notaFinal.toFixed(2)}`;
    
    // Alterar a cor da nota final com base no valor
    if (notaFinal < 6.00) {
        notaFinalElement.style.color = 'red';
    } else {
        notaFinalElement.style.color = 'green';
    }
}

function focusNextInput(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const formElements = Array.from(document.getElementById('notaForm').elements);
        const currentIndex = formElements.indexOf(event.target);
        const nextElement = formElements[currentIndex + 1];
        if (nextElement) {
            nextElement.focus();
        }
    }
}
