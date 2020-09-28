var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
  
//   if (t.split(":")[1] == "00"){
//     alert("new hour");
//   }

//   if (t.split(":")[2] == "00"){
//     alert("new min");
//   }

}
