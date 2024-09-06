alert("Programa calculo de area geometrica plana")
let opcao = (prompt("DIgite o numero da figura geometrica : \n 1.triangulo \n 2.quadrado \n 3.retangulo \n 4.circulo "))/* "\n" = quebra de linha */
if (opcao == 1) {
    let base = parseFloat(prompt("DIgite o valor da base : "))
    let altura = parseFloat(prompt("DIgite o valor da altura : "))
    let area = base * altura / 2
    alert("A area do triangulo corresponde a : " + area)
} else
    if (opcao == 2) {
        let lado = parseFloat(prompt("DIgite o valor da lado : "))
        let area = lado * lado
        alert("A area do quadrado corresponde a : " + area)
    } else
        if (opcao == 3) {
            let base = parseFloat(prompt("DIgite o valor da base : "))
            let altura = parseFloat(prompt("DIgite o valor da altura : "))
            let area = base * altura / 2
            alert("A area do retangulo corresponde a : " + area)
        } else
            if (opcao == 4) {
                let raio = parseFloat(prompt("DIgite o valor da raio : "))
                let area = 3.14 * raio * raio
                alert("O resultado é " + area)
            } else {
                alert("Não possui esse numero correspondente")
            }
