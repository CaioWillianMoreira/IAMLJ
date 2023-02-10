function funcSum(arr=[]) {
	return arr.reduce((a, b) => a + b);
}

function gradientDescent(n=0) {
	return n * (1 - n);
}

function feedForward(inputs=[], target=0, epochs=1) {
	if(target<=0) target = 0.1;
	else if(target>1) target = 1;

	let weights = [];
	for(let i=0; i<inputs.length; i++) {
		weights.push(Math.random());
	}

	for(let i=1; i<=epochs; i++) {
		let multiply = [];
		for(let j=0; j<inputs.length; j++) {
			if(inputs[j]<=0) inputs[j] = 0.1;
			multiply.push(inputs[j] * weights[j]);
		}

		let sum = funcSum(multiply);
		let output = parseFloat(Math.tanh(sum)).toFixed(4);

		let error = parseFloat(Math.abs(target - output)).toFixed(4);
		for(let j=0; j<inputs.length; j++) {
			weights[j] += inputs[j] * gradientDescent(error);
		}
		let epoch = i.toString().padStart(7, '0');

		console.log(`época: ${epoch} - taxa de erro: ${error} - saída: ${output}`);
	}
}

//feedForward([0], 0.1, 800);

feedForward([0, 0], 0.2, 1000);


/*
1) A função funcSum é chamada primeiro para somar os elementos de um array de entrada. Ela usa o método reduce do JavaScript para calcular a soma dos elementos do array e retornar o resultado.

2) A função gradientDescent é chamada para calcular a taxa de aprendizado da rede neural. Ela usa a função tangente hiperbólica para calcular a taxa de aprendizado a partir do valor de entrada n.

3) A função feedForward é chamada com três argumentos: inputs, target e epochs. Primeiro, verifica-se se o valor de target é menor ou igual a 0 ou maior que 1. Se for, o valor de target é ajustado para 0,1 ou 1, respectivamente.

4) Em seguida, são inicializados pesos aleatórios para a rede neural.

5) O loop de época começa, com o número de épocas determinado pelo argumento epochs. Para cada época, multiplicam-se os valores de entrada pelos pesos da rede.

6) A soma dos resultados da multiplicação dos valores de entrada com os pesos é calculada usando a função funcSum.

7) O resultado da soma é passado para a função tangente hiperbólica, que retorna a saída da rede neural.

8) Em seguida, é calculado o erro absoluto entre a saída da rede e o valor alvo.

9) Finalmente, os pesos da rede são atualizados usando a taxa de aprendizado calculada na função gradientDescent e o erro absoluto. A saída e a taxa de erro são exibidas na tela para acompanhamento do progresso do algoritmo.

10) O loop de época é repetido até que o número de épocas seja alcançado.
*/