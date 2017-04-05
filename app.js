 	function aleatoire(a) {
    var lettre = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
    var result = "";

    for (i=0; i<a; i++) {
    
        result += lettre[Math.floor(Math.random() * lettre.length)];
    }
    	alert(result);
    
    }
    	aleatoire(10);


    


