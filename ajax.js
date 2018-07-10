(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("data.json", function(text){
    let data = JSON.parse(text);

    console.log(data);
    console.log(data.skills);

    basics(data.basics);
    next(data.next);
    skills(data.skills);
    education(data.education);
    certifications(data.certifications);
    interest(data.interests);
    declaration(data.declaration);
   // console.log(data.interests);
    // console.log(data.skills);


});


var main = document.getElementById("main");
main.classList.add("main");
var left = document.createElement("div");
left.classList.add("left");
var bio = document.createElement("div");
bio.classList.add("bio");

function basics(basics){

var img=document.createElement("img");
img.src="images/download.jpg";
var example = document.createElement("div");
example.classList.add("name");
example.textContent=basics.name;
var name1=document.createElement("div");
name1.classList.add("name1");
name1.textContent=basics.designation;
bio.appendChild(img);
bio.appendChild(example);
bio.appendChild(name1);


left.appendChild(bio);


main.appendChild(left);
console.log(main);

var sidemenu=document.createElement("div");
sidemenu.classList.add("sidemenu");
sidemenu.textContent=basics.goal;


var obj = document.createElement("div");
obj.classList.add("obj");


var myphone = document.createElement("div");
myphone.classList.add("myphone");
myphone.textContent=basics.phone;

var email = document.createElement("div");
email.classList.add("email");
email.textContent=basics.email;

var lag =document.createElement("div");
lag.classList.add("Language");
lag.textContent=basics.Languages;





left.appendChild(sidemenu);
sidemenu.appendChild(obj);
sidemenu.appendChild(myphone);
sidemenu.appendChild(email);
sidemenu.appendChild(lag);
main.appendChild(left);
console.log(main);

}

var right = document.createElement("div");
 right.classList.add("right");


 function next(next){


());
