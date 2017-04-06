


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

	

var mesResultat = tableauAleatoire(10,7);
afficheTableau(mesResultat);