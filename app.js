


function chaineAleatoire(a) {
	var lettre = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
	var result = '';

	for (i = 0; i < a; i++) {

		result += lettre[Math.floor(Math.random() * lettre.length)];
	}

	return result;

}

console.log( chaineAleatoire(30));



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


    	console.log (tableauAleatoire(8,6));


	

