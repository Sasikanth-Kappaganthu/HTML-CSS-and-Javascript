var total_items = 12;

function CalculateItemsValue() {
var total = 0;
var service = 0;
for (i=1; i<=total_items; i++) {

itemID = document.getElementById("qnt_"+i);
if (typeof itemID === 'undefined' || itemID === null) {
alert("No such item - " + "qnt_"+i);
} else {
total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
}
}
localStorage.setItem("val",total);
}
function sub(){
	var tot=localStorage.getItem("val")
	console.log(tot)
 document.getElementById("ItemsTotal").value=tot;
}

function validate() {
var a=document.getElementById("mob").value;
if(isNaN(a))
{
document.getElementById("messages").innerHTML="Enter only numeric value";
return false;
}
if(a.length<10||a.length>10)
{
document.getElementById("messages").innerHTML="Mobile number must be 10 digits";
return false;
}
if((a.charAt(0)!=9)&&(a.charAt(0)!=8)&&(a.charAt(0)!=7)&&(a.charAt(0)!=6))
{
document.getElementById("messages").innerHTML="Mobile no. must start with 9/8/7/6";
return false;	
}
alert("Thanks for your valuable feedback. Hope to see you again");
}
