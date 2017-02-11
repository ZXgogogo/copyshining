var mail=document.getElementsByClassName("mail")[0];
var f_mail=document.getElementsByClassName("f_mail")[0];
mail.onmouseenter=function(){
	f_mail.style.display="block"
}
var f_fh=document.all.f_fh;
var ytb=document.all.ytb;
var lin=document.all.lin;
var twi=document.all.twi;
var li1=document.all.li1;
var li2=document.all.li2;
var li3=document.all.li3;
var li4=document.all.li4;
li1.onmouseenter=function(){
	f_fh.style.display="block"
}
li1.onmouseleave=function(){
	f_fh.style.display="none"
}
f_mail.onmouseleave=function(){
	f_mail.style.display="none"
}

li2.onmouseenter=function(){
	ytb.style.display="block"
}
li2.onmouseleave=function(){
	ytb.style.display="none"
}

li3.onmouseenter=function(){
	lin.style.display="block"
}
li3.onmouseleave=function(){
	lin.style.display="none"
}

li4.onmouseenter=function(){
	twi.style.display="block"
}
li4.onmouseleave=function(){
	twi.style.display="none"
}
//鼠标放上去让第一个图片显示出来，离开让第一个图片隐藏
var c_one=document.getElementsByClassName("c_one")[0]
var c_one_tu2=document.getElementsByClassName("c_one_tu2")[0]
var c_tiaotiao1=document.getElementById("c_tiaotiao1")
c_one.onmouseenter=function(){
	c_one_tu2.style.display="block";
	c_tiaotiao1.style.backgroundColor="yellow";
}
c_one.onmouseleave=function(){
	c_one_tu2.style.display="none";
	c_tiaotiao1.style.backgroundColor="rgb(175, 175, 175)";
}
//鼠标放上去让第二个图片显示出来，离开让第二个图片隐藏
var c_two=document.getElementsByClassName("c_two")[0]
var c_two_tu3=document.getElementsByClassName("c_two_tu3")[0]
var c_tiaotiao2=document.getElementById("c_tiaotiao2")
c_two.onmouseenter=function(){
	c_two_tu3.style.display="block";
	c_tiaotiao2.style.backgroundColor="yellow";
}
c_two.onmouseleave=function(){
	c_two_tu3.style.display="none";
	c_tiaotiao2.style.backgroundColor="rgb(175, 175, 175)";
}

//鼠标放上去让第三个图片显示出来，离开让第三个图片隐藏
var c_three=document.getElementsByClassName("c_three")[0]
var c_three_tu4=document.getElementsByClassName("c_three_tu4")[0]
var c_tiaotiao3=document.getElementById("c_tiaotiao3")
c_three.onmouseenter=function(){
	c_three_tu4.style.display="block";
	c_tiaotiao3.style.backgroundColor="yellow";
}
c_three.onmouseleave=function(){
	c_three_tu4.style.display="none";
	c_tiaotiao3.style.backgroundColor="rgb(175, 175, 175)";
}