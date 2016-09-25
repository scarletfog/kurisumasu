function rysujRysu(p) {

	for (var n = 1 ; n <= p ; n++){

		var star = '';
    
    for ( var x = 1; x <= p - n ; x++){

		star += ' ';}

		for ( var y = 1; y <= n*2-1; y++){

		star += '*';

		}
		
		console.log(star);	
	}
}
