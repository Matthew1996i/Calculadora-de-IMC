function calc() {
		
	var peso = document.getElementById('peso').value;
	var alt = document.getElementById('alt').value;
	var calc = peso/(alt*alt);
	console.log(calc);
	alert('Seu IMC é:' + calc.toFixed(1));

    if      (calc < 16){
		document.getElementById('print').value = ('Magreza grave');
	}else if(calc <= 17){
		document.getElementById('print').value = ('Magreza moderada');
	}else if(calc <= 18.5){
		document.getElementById('print').value = ('Magreza leve');
	}else if(calc <= 25){
		document.getElementById('print').value =('Saudável');
	}else if(calc <= 30) {
		document.getElementById('print').value =('Sobrepeso');
	}else if(calc <= 35) {
		document.getElementById('print').value =('Obesidade Grau I');
	}else if(calc <= 40) {
		document.getElementById('print').value =('Obesidade Grau II (Severa)');
	}else if(calc >= 40){
		document.getElementById('print').value =('Obesidade Grau III (Mórbida)');
	}else{
		document.getElementById('print').value =('');
	}
}


