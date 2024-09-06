let preco = parseFloat(prompt("DIgite o preco do produto : "))
let desconto= parseFloat(prompt("Digite o desconto do produto : "))
let novovalor = preco-(desconto/100*preco)
alert("O novo preco corresponde a : " + novovalor)