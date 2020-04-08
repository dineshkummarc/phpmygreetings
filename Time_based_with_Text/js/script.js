var date = new Date();
var hours = date.getHours();
var greet;

if(hours < 12){
	greet = "<center><div> Good Morning.</div></center>";
}else if(hours >= 12 && hours <= 16){
	greet = "<center><div> Good Afternoon.</div></center>";
}else if(hours >= 16 && hours <= 20){
	greet = "<center><div> Good Evening.</div></center>";
}else if(hours >= 20 && hours <= 24){
	greet = "<center><div> Good Night.</div></center>";
}

document.getElementById('greeting').innerHTML = greet;