var tmp = 'g';
function change1(){
	

	function change(){
		
		var img = document.getElementById('G');
		if(tmp=='g'){
		img.src = "F_logo.png";
		tmp = 'f';
	}
		else{
			img.src = "G_logo.png";
			tmp = 'g';
		}
	}
	change();
	//setInterval("change()",1100);
}

var tmp = 'g';
function change2(){


	function change(){
		
		var img = document.getElementById('G');
		if(tmp=='g'){
		img.src = "F_logo.png";
		tmp = 'f';
	}
		else{
			img.src = "G_logo.png";
			tmp = 'g';
		}
	}

	change();

	

}

setInterval("change2()",500);