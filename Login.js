let username = document.querySelector('#Username')
let arr = [];

window.onload = () =>{
  let template = "";  
  let str = localStorage.getItem("member");
  if (str != null) arr = JSON.parse(str);
  
  
  
  for (let key of arr){
    username.options.add(new Option(`${key.Username}`, `${key.Username}`))
  }  
 
}


function getData() {
  let str = localStorage.getItem("member");
  if (str != null) arr = JSON.parse(str);

  return arr;
}

function login() {
  let username = document.getElementById("Username").value;
  let password = document.getElementById("Password").value;
  let loginPassword="1234";
  let found = false;

  if (
    username != "" &&
    password != ""
  ) {

    if((username=="Administration" && password == loginPassword)||(username=="Member" && password == loginPassword)){
      alert("Successfully logged in");
          window.open("Project.html");
          window.close("Login.html");
    }
      

 for(let key of arr){
  if((key.Username == username && key.Password == password) || (username=="Administration" && password == loginPassword)){    
      alert("Successfully logged in");
      window.open("Project.html");
      window.close("Login.html"); 
      found = true;    //send to next page
    
  }  
 }  

if (!found) {  
  alert("Password Incorrect") 
} 

    const Login = {
      username: username,
      password: password,
    };

    window.localStorage.setItem("login", JSON.stringify(Login));

  } else 
    alert("Sorry feild empty");
   
}
// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');
letters+='bug';
// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(33, 32, 32, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#f5f5f5';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);