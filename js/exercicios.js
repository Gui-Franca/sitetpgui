function changeOperation(op){
	op = op.value;
	if (op == "rdbSOMA") {
		//Ocultar coisas da raiz
		document.all['entradaRAIZ'].style = "display: none;"; 
		document.all['lblRAIZ'].style = "display: none;";
		//Mostrar coisas da soma
		document.all['entradaSOMAR1'].style = "display: block;"; 
		document.all['entradaSOMAR2'].style = "display: block;";
		document.all['lblSOMAR1'].style = "display: block;";
		document.all['lblSOMAR2'].style = "display: block;";
	}
	else{

		//Ocultar coisas da soma
		document.all['entradaSOMAR1'].style = "display: none;"; 
		document.all['entradaSOMAR2'].style = "display: none;";
		document.all['lblSOMAR1'].style = "display: none;";
		document.all['lblSOMAR2'].style = "display: none;"; 
		//Mostrar coisas da raiz
		document.all['entradaRAIZ'].style = "display: block;";
		document.all['lblRAIZ'].style = "display: block;";
	}
}

function l1ex1(){
	// EQ2G = Equação 2 Grau
	var n1 = Number(document.all['entradaEQ2G1'].value);
	var n2 = Number(document.all['entradaEQ2G2'].value);
	var n3 = Number(document.all['entradaEQ2G3'].value);
	var pResposta =document.all['saidaEQ2G'];
	var delta;
	delta = ((n2*n2)-(4*n1*n3));
	if(delta == 0)
	{
		pResposta.innerHTML =  "A raiz não pode ser 0";
	}
	else if(delta < 0)
	{
		pResposta.innerHTML =  "Não tem raiz";
	}
	else
	{
		var x1 = ((-n2)+(Math.sqrt(delta)))/(2*n1);
		var x2 = ((-n2)-(Math.sqrt(delta)))/(2*n1);
		pResposta.innerHTML = "X1: "+x1+"X2: "+x2;
	}

}

function l1ex2(){
	// MP = Média Ponderada
	var n1 = Number(document.all['entradaMP1'].value);
	var n2 = Number(document.all['entradaMP2'].value);
	var n3 = Number(document.all['entradaMP3'].value);
	var pResposta =document.all['saidaMP'];

	var media = ((n1*2)+(n2*3)+(n3*5))/10
	if(media >= 0 & media < 5)
	{
		pResposta.innerHTML = "Média ponderada: "+media+" - Conceito: E";
	}
	else if (media >= 5 & media < 6) {
		pResposta.innerHTML = "Média ponderada: "+media+" - Conceito: D";
	}
	else if (media >= 6 & media < 7) {
		pResposta.innerHTML = "Média ponderada: "+media+" - Conceito: C";
	}
	else if (media >= 7 & media < 8) {
		pResposta.innerHTML = "Média ponderada: "+media+" - Conceito: B";
	}
	else if (media >= 8 & media <= 10) {
		pResposta.innerHTML = "Média ponderada: "+media+" - Conceito: A";
	}
	else
	{
		pResposta.innerHTML = "Valores incorretos, média menor que 0 ou maior que 10.";
	}

}

function l1ex3(){
	// OC = Ordem Crescente
	var n1 = Number(document.all['entradaOC1'].value);
	var n2 = Number(document.all['entradaOC2'].value);
	var n3 = Number(document.all['entradaOC3'].value);
	var pResposta =document.all['saidaOC'];

	if(n1 > n2 && n2> n3)
	{
		pResposta.innerHTML = n1+">"+n2+">"+n3;
	}
	else if(n1> n3 && n3 > n2)
	{
		pResposta.innerHTML = n1+">"+n3+">"+n2;
	}
	else if(n2> n1 && n1 > n3)
	{
		pResposta.innerHTML = n2+">"+n1+">"+n3;
	}
	else if(n2> n3 && n3 > n1)
	{
		pResposta.innerHTML = n2+">"+n3+">"+n1;
	}
	else if(n3> n1 && n1 > n2)
	{
		pResposta.innerHTML = n3+">"+n1+">"+n2;
	}
	else if(n3> n2 && n2 > n1)
	{
		pResposta.innerHTML = n3+">"+n2+">"+n1;
	}
	else if(n1 == n2 && n1 > n3)
	{
		pResposta.innerHTML = n1+"="+n2+">"+n3;
	}
	else if(n1 == n2 && n1 < n3)
	{
		pResposta.innerHTML = n3+">"+n1+"="+n2;
	}
	else if(n1 == n3 && n1 > n2)
	{
		pResposta.innerHTML = n1+"="+n3+">"+n2;
	}
	else if(n1 == n3 && n1 < n2)
	{
		pResposta.innerHTML = n2+">"+n1+"="+n3;
	}
	else if(n2 == n3 && n2 > n1)
	{
		pResposta.innerHTML = n2+"="+n3+">"+n1;
	}
	else if(n2 == n3 && n2 < n1)
	{
		pResposta.innerHTML = n1+">"+n2+"="+n3;
	}
	else if(n1==n2 && n2 == n3)
	{
		pResposta.innerHTML = "Todos os números são iguais."
	}


}

function l1ex4(){
	// DCM = Data Cronologicamente Maior
	var d1 = Number(document.all['entradaDCMD1'].value);
	var m1 = Number(document.all['entradaDCMM1'].value);
	var a1 = Number(document.all['entradaDCMA1'].value);
	var d2 = Number(document.all['entradaDCMD2'].value);
	var m2 = Number(document.all['entradaDCMM2'].value);
	var a2 = Number(document.all['entradaDCMA2'].value);
	var pResposta =document.all['saidaDCM'];

	if(a2 > a1)
	{
		pResposta.innerHTML = "Data Cronologicamente maior: " + d1+"-"+m1+"-"+a1;
	}
	else if(m2 > m1)
	{
		pResposta.innerHTML = "Data Cronologicamente maior: " + d1+"-"+m1+"-"+a1;
	}
	else if(d2 > d1)
	{
		pResposta.innerHTML = "Data Cronologicamente maior: " + d1+"-"+m1+"-"+a1;
	}
	else
	{
		pResposta.innerHTML = "Data Cronologicamente maior: " + d2+"-"+m2+"-"+a2;
	}
}

function l1ex5(){
	// RDB = Radio button
	var nRaiz = Number(document.all['entradaRAIZ'].value);
	var ns1 = Number(document.all['entradaSOMAR1'].value);
	var ns2 = Number(document.all['entradaSOMAR2'].value);
	var pResposta =document.all['saidaRDB'];

	var rdbsominha = document.getElementsByName('operacao').value;

	if(rdbsominha[0].value == "rdbSOMA")
	{
		pResposta.innerHTML = "Resultado = "+ns1+ns2;
	}
	else
	{
		pResposta.innerHTML = "Resultado = "+(Math.sqrt(nRaiz));
	}
}

function l2ex1(){
	var sal = Number(document.all['entradaSal'].value);
	var pResposta = document.all['saidaSal'];
	var salario = 0;
		if(sal <= 500){
			salario = (sal*1.05) + 150;
		}
		else if(sal <=600){
			salario = (sal*1.12) + 150;
		}
		else if (sal>500 && sal<=1200){
			salario = (sal*1.12) + 100;
		}
		else if (sal >1200){
			salario = sal + 100;
		}
		pResposta.innerHTML = "Novo salário: "+salario;
}

function l2ex2(){
	var n = Number(document.all['entradaPrimo'].value);
	var pResposta = document.all['saidaPrimo'];
	var cont = 0;
	for (var i = 1; i <= n; i++) {
		if(n%i == 0)
			cont++;
	}
	if (cont == 2) 
    	pResposta.innerHTML = "Resposta: <i>é primo.</i>";
    else
    	pResposta.innerHTML = "Resposta: <i>não é primo.</i>";
}

function l2ex3(){
	var n = Number(document.all['entradaFib'].value);
	var pResposta = document.all['saidaFib'];
	var fib = 0;
	var at = 0;
	var ant = 1;
	pResposta.innerHTML = "";
	for(i=1;i<=n;i++){
		fib = at + ant;
		ant=at;
		at=fib;
		pResposta.innerHTML += fib+" - ";
	}
}

function l2ex4(){
	var tinto=0;
	var branco=0;
	var rose=0;
	for(i=1;i<=50;i++){
	tpv = prompt("Insira o tipo do"+i+"º vinho");
	if(tpv == 1){
		tinto++;
	}
	else if(tpv ==2){
		branco++
	}
	else if(tpv == 3){
		rose++
	}
	else{
		alert("Insira um valor entre 1 e  3");
		i--;
	}
	}

	alert("Qtd tinto: "+ (tinto/50)*100+"% de 50" +"\nQtd branco: "+ (branco/50)*100+"% de 50" +"\nQtd rose: "+(rose/50)*100+"% de 50");	
}

function l2ex5(){
	var n = Number(document.all['entradaFatorial'].value);
	var pResposta = document.all['saidaFatorial'];
	var cont = 0;
	var fat = 0;
	var at = n;
	var ant = n -1;
	for (var i = n-1; i > 1; i--) {
		fat = at * ant;
		ant--;
		at=fat;
	}
	
    	pResposta.innerHTML = "Fatorial de "+n+": "+fat;
}

function l3ex1(){
	var pRespostaPos = document.all['saidaPos'];
	var pRespostaNeg = document.all['saidaNeg'];
	pRespostaPos.innerHTML = "Positivos: ";
	pRespostaNeg.innerHTML = "Negativos: ";
	var pos=[];
	var neg=[];
	var n =0;
	for(i=0;i<=7;i++){
	n = prompt("Insira um número positivo ou negativo (0 == positivo)");
	if(n >= 0){
		pos[i] = n;
	}
	else if(n<0)
	{
		neg[i] = n;
	}
}
	for(i=0;i<=7;i++){
		if(pos[i] != null)
		{
			pRespostaPos.innerHTML += pos[i]+", "
		}
		else if(neg[i]!= null)
		{
			pRespostaNeg.innerHTML += neg[i]+", "
		}
		else
		{
			i = 8;
		}
	}
}
function l3ex2(){
	var pResposta = document.all['saidaMaior50'];
	var maior=[];
	var n =0;
	var c=0;
	for(i=0;i<=7;i++){
	n = prompt("Insira um número");
	if(n >= 50){
		maior[i] = n;
	}
}
	for(i=0;i<=7;i++){
		if(maior[i] != null)
		{
			pResposta.innerHTML += "Número: "+maior[i]+", posição: "+(i+1)+"<br>";
		}
		else if(maior[i]==null)
		{
			c++;
		}
		else if(c ==8)
		{
			pResposta.innerHTML = "Nenhum número maior que 50.";
		}
	}
}

function l3ex3(){
	var pRespostaPar = document.all['saidaPar'];
	var pRespostaImpar = document.all['saidaImpar'];
	pRespostaPar.innerHTML = "Pares: ";
	pRespostaImpar.innerHTML = "Ímpares: ";
	var par=[];
	var impar=[];
	var n =0;
	for(i=0;i<=9;i++){
	n = prompt("Insira um número");
	if(n%2==0){
		par[i] = n;
	}
	else
	{
		impar[i] = n;
	}
}
	for(i=0;i<=9;i++){
		if(par[i] != null)
		{
			pRespostaPar.innerHTML += par[i]+", "
		}
		else if(impar[i]!= null)
		{
			pRespostaImpar.innerHTML += impar[i]+", "
		}
		else
		{
			i = 10;
		}
	}
}

function l3ex4(){
	var pResposta = document.all['saidaOrdemVetor'];
	var num =[];
	var n =0;
	for(i=0;i<=9;i++){
		n = prompt("Insira um número");
		num[i] = n;
	}
	num.sort(sortfunction);
	for(i=0;i<=9;i++){
		pResposta.innerHTML += num[i]+" ";
	}
}

function sortfunction(a, b){
	return (a-b);
}

function l3ex5(){
	var pResposta = document.all['saidaIguaisAoUltimo'];
	var num = [];
	var c = 0;
	var n = 0;
	var a = 0;
	for(i=0;i<=99;i++){
		n = prompt("Insira um número");
		if(n == 0)
		{
			i = 100;
		}
		else
		{
			num[i]=n;
			c++;
		}
	}
	for(i=0;i<=99;i++){
		if(num[i] == num[c-1])
			a++;
		else  if(num[i]==null)
			i=100;
	}
	pResposta.innerHTML = a+" números iguais ao último digitado("+num[c-1]+")";
}