


function chaineAleatoire(a) {
	var lettre = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
	var result = '';

	for (i = 0; i < a; i++) {

		result += lettre[Math.floor(Math.random() * lettre.length)];
	}

	return result;

}

//console.log( chaineAleatoire(30));



    function tableauAleatoire ( line, col ) {
    	
    	var array = [];
    	var ligne = [];
    										
    						
	    	for (var i = 0; i < line; i++) {
    			for (var j = 0; j < col ; j++) {
    				ligne.push(chaineAleatoire(5));
    			}
    			
	    	   	
	    		array.push(ligne);
	    		ligne = [];				
	    	}

	    	return array

    }					


    	//console.log (tableauAleatoire(8,6));





 function afficheTableau(tab){
 	$("#vue").html(""); //réinitialise le tableau
 	// var haut = tab.length; // définit la hauteur du tableau
 	// var larg = tab[].length; // definit la largeur du tableau
 	// console.log(haut);
 	// console.log(larg);

 	for (var i=0; i<tab.length; i++){  
 		var ligneencours = $("<tr></tr>"); //création variable pour intégrer des lignes
 		$("#vue").append(ligneencours)     //dans tbody je rajoute les lignes
 		for (var j=0; j<tab[i].length; j++){
 			var colonneencours = $("<td></td>");  // création variable pour intégrer des colonnes
 			colonneencours.append(tab[i][j]);     // dans colonne je rajoute la string contenu dans tab [i] [j] c'est la position d'un élémént dans un tableau
 			ligneencours.append(colonneencours);  //dans les lignes je rajoute les colonnes

 		}
 		$("#vue").append(ligneencours);      //dans tbody je rajoute les lignes
 	}

}

	


function afficherBoutonsth(tab){
	$("#th").html("");
	var ligneencours = $("<tr></tr>");  //création variable pour intégrer des lignes
	for (var i =0; i<tab[0].length; i++){
		var colonneencours = $("<td></td>");  //création variable pour intégrer des colonnes
		var radioButton = $('<input type="radio" name="hor" class="xx"/>');  //variable pour créer l'input des boutons radios
		radioButton.data("x",i);  // data permet l'enregistrement des radios boutons
		colonneencours.append(radioButton);  //je rajoute Radiobouton dans colonne en concours
		ligneencours.append(colonneencours);  // je rajoute colonne en cours dans ligneen cours
	}
	$("#th").append(ligneencours);  // dans le tableau head je rajoute ligne en cours
}


var mesResultat = tableauAleatoire(10,3);
afficherBoutonsth(mesResultat);
