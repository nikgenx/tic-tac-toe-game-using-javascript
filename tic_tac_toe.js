//javascript code

function dommanupulation(a,id){
	var type=null;
	console.log(id)
	let [name,value]=id.split("-");
	value=parseInt(value);
	if(a[value]===""){
		type=playerTurn();
		document.getElementById(id).textContent=type;
	}
	else{
		alert("this place is already selected");
	}
	return [value,type];
}

function playerTurn(){
	if(document.querySelector("#player-0").classList.contains("active")){
		type="X";
	}
	else{
		type="O";
	}
	document.querySelector("#player-0").classList.toggle("active");
	document.querySelector("#player-1").classList.toggle("active");
	return type;
}

function draw_check(a){
	var flag=0;
	for(var i=0;i<9;i++){
		if(a[i]==="")
		flag=1;
	}

	if(flag==0){
		alert("game is draw")
	}
}

function win_check(a){
	if(((a[0]&&a[1]&&a[2])||(a[3]&&a[4]&&a[5])||(a[6]&&a[7]&&a[8])||(a[0]&&a[4]&&a[8])||(a[2]&&a[4]&&a[6])||(a[0]&&a[3]&&a[6])||(a[1]&&a[4]&&a[7])||(a[2]&&a[5]&&a[8]))===("X")){
		alert("player 1 wins")
	}

	else if(((a[0]&&a[1]&&a[2])||(a[3]&&a[4]&&a[5])||(a[6]&&a[7]&&a[8])||(a[0]&&a[4]&&a[8])||(a[2]&&a[4]&&a[6])||(a[0]&&a[3]&&a[6])||(a[1]&&a[4]&&a[7])||(a[2]&&a[5]&&a[8]))===("0")){
		alert("player 2 wins")
	}

	else{
		draw_check(a)
	}
}



(function(){
	const arr=["","","","","","","","",""];
	const ids=document.querySelectorAll(".cell");
	Array.from(ids).forEach(function(el){
		el.addEventListener("click",function(event){
			let id=event.target.id;
			const [value,type]=dommanupulation(arr,id);
			arr[value]=type;
			win_check(arr)
		})
	})
})()
