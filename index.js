var click = 0;
x=-50;
y=50;
delay =0;

function moveb()
{
	delay+=1;
	if(delay%10==0){
	el=document.getElementById("btfl").style;
	x=Math.round(Math.random() * (500 - 0 + 1)) + 0;
	y=Math.round(Math.random() * (300 - 0 + 1)) + 0;
		if ((x<0)||(y<0)) {
			x=0;
			y=0;
		}
		if ((x>300)||(y>250)){
			x=300;
			y=250;
		} 
		el.left = x+"px";
		el.top = y+"px"; 
	}
}

function start(){
	setInterval(moveb, 20);
}

function ChangeImage(image){
	document.getElementById("btfl").setAttribute("src",image.attributes.src.value);
	click = 0;
	document.getElementById("cl").value=" ";
}
function clickedOnBtf(){
	click++;
	document.getElementById("cl").value=click;
	if(click == 10){	
		setInterval(moveb, 10);
		alert("You are on the 2 level!");
	} else if(click == 20){	
		setInterval(moveb, 25);
		alert("You are on the 3 level!");
	} else if(click == 30){
		setInterval(moveb, 20);	
		alert("You are on the 4 level!");
	} else if(click == 40){
		setInterval(moveb, 200);
		alert("You are on the 5 level!");	
	} else if(click == 50){
		setInterval(moveb, 20);
		alert("You are on the 6 level!");	
	} else if(click == 60){
		setInterval(moveb, 10);
		alert("You are on the 7 level!");	
	} else if(click == 70){
		setInterval(moveb, 5);
		alert("You are on the 8 level!");
	} else if(click == 80){
		setInterval(moveb, 1000);
		alert("You are on the 9 level!");
	} else if(click == 90){
		setInterval(moveb, 20);
		alert("You are on the 10 level!");	
	} else if(click == 100){
		location.reload(true);
	}

}