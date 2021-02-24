
document .getElementById("about").innerHTML=
"Your name : "+ " Esraa mohammad ."+"<br>"+
 " Your age : "+ " I am 20 years ."+"<br>"+
 " Your faculty :"+ " I study in the faculty of Arts in English department . "+"<br>"+
 "Your hoppy :"+" I love programming."+"<br>"+
 "Your date of birth :"+ " 10 / 7 / 2000 ."+"<br>"+
 "Your nationality :" + " I am Egyptian  .";
var number1=11,
     number2=5,
     number3=6,
     number4=13,
     number5=15;
     


document.getElementById("add").innerHTML=number1+number4;
document.getElementById("subtract").innerHTML=number1-number2;
document.getElementById("multiply").innerHTML=number5*number3;
document.getElementById("divide").innerHTML=number5/number2;
document.getElementById("averageofnumber").innerHTML=(number1+number2+number3+number4+number5)/5;

function aboutme(){
    document.getElementById("show").innerHTML=
        "I am Esraa ."+
        "I love programming."+
        "I want to be a full stack developer."+
 "I study in the faculty of Arts in English department . "+
 "I am Egyptian  .";
}

function checkinput(){
    var entered=document.getElementById("check").value;
    if (entered ===""){
       alert(" this field cannot be empty")
    }
    else if( entered.length<=2 ||entered.length>=15){
alert(" you must enter a name not less than two letters and no more than 15")
    }

    else{
        alert("the login process was successful")
    }
}

//  var mystring="you should make your website if you donnot busy."

//  console.log(mystring);

/*syntax
substr(start,length)
*/
//  console.log(mystring.substr(4,6) );

/*syntax
substring(start,end)
*/
// console.log(mystring.substring(10,20) );


/*syntax
substring(start,end)
*/
//  console.log(mystring.slice(10,20) );


var repeat=["salma","soha","sandy","samar","hagar","Esraa","aya","mena","noor","noha","Ganna",];
var i;
for(i=0; i<repeat.length; i++){
console.log(repeat[i])

}

  var myinput=document.getElementById("num"),
      myp1=document.getElementById("message1"),
      mynumber=Math.floor(Math.random()*100)
      console.log(mynumber);

 function myfunc(){
    var myinput=document.getElementById("num").value;

  if(myinput==mynumber){
    alert("Congratulation!!! ,you guess the right number")
  }
  else if(myinput===""){
      alert("first type the number and click!!!")
  }
  else if(myinput<mynumber){
    alert("You guessed a lower number!!")
}
else if(myinput>mynumber){
    alert(" You guessed a bigger number!!")
}

else{
    alert("error!!!!!! try again")
}
}


//add element
var theparent=document.getElementById("myparent-element");
 var newelement=document.createElement("h3");
 var textelement=document.createTextNode("Hello in javascript Dom");
 var atrributeofelement=newelement.setAttribute("id","first add")
 theparent.appendChild(newelement);

function processofadd(){
    theparent.appendChild(newelement);
    newelement.appendChild(textelement);
    console.log(theparent);
}

//remove element
function processofremove(){
    theparent.removeChild(newelement);
}



