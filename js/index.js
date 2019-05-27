var currentModal = ""; // Global com o ultimo modal aberto
var isOpen = 0;// Global que indica se o modal ainda está aberto

function openModal(n){
	document.getElementById(n).style.display='block';//abrindo o modal solicitado
	currentModal = n; //Atualizando qual modal está aberto
	isOpen = 1; //Atualizando 
}	

//Ouvinte de click, para verificar se o modal está aberto e fecha-lo 
window.onclick = function(event) {
	if(isOpen){
		// Obtendo o modal
		var modal = document.getElementById(currentModal);
		if (event.target == modal) {
		    modal.style.display = "none";//Escondendo
		    isOpen = 0;//Atualizando
		}
	}		
}

function changeSection(id) {
	//Obtendo o nome da sessão, e invertendo 
	var x = document.getElementById(id);
  	if (x.className.includes("w3-show")) {
  		x.className = x.className.replace("w3-show", "w3-hide");	    	
  	} else { 
    	x.className = x.className.replace("w3-hide", "w3-show");
  	}
}

function showSections(){
	//Obtendo e exibindo todas as sessões
	for (var i = 1; i <=3; i++) {
		var x = document.all['atividade'+[i]];
		x.className = x.className.replace("w3-hide", "w3-show");	
	}
}

function hideSections(){
	//Obtendo e escondendo todas as sessões
	for (var i = 1; i <=3; i++) {
		var x = document.all['atividade'+[i]];
		x.className = x.className.replace("w3-show", "w3-hide");	
	}
}