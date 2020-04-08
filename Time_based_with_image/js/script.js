var date = new Date();
var hours = date.getHours();
var greet;

if(hours < 12){
	greet = "<center><img src='images/image1.png' width='500'/> </br> <div> Good Morning.</div></center>";
}else if(hours >= 12 && hours <= 16){
	greet = "<center><img src='images/image2.png' width='500'/> </br> <div> Good Afternoon.</div></center>";
}else if(hours >= 16 && hours <= 20){
	greet = "<center><img src='images/image3.png' width='500'/> </br> <div> Good Evening.</div></center>";
}else if(hours >= 20 && hours <= 24){
	greet = "<center><img src='images/image4.png' width='500'/> </br> <div> Good Night.</div></center>";
}

document.getElementById('greeting').innerHTML = greet;