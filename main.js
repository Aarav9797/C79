var list=[];

function sorting(){
list.sort();
document.getElementById("result").innerHTML=list;

}
function submiting(){
var one=document.getElementById("Name1").value;
var two=document.getElementById("Name2").value;
var three=document.getElementById("Name3").value;
var four=document.getElementById("Name4").value;

list.push(one);
list.push(two);
list.push(three);
list.push(four);

document.getElementById("result").innerHTML=list;
document.getElementById("Srt").style.display="inline-block";
document.getElementById("Sbmt").style.display="none";

}
