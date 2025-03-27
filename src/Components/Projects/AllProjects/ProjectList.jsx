import React from 'react';
import ProjectShowcase from './ProjectShowcase';

const ProjectList = () => {

    const projects = [
        {
            title: "Currency Converter",
            liveUrl: "https://currency-changer-mu.vercel.app/",
            htmlCode: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency change.com</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="container">
        <h1>Currency Converter</h1>
        <form action="">
            <div class="amount">
                <p>Enter Amount</p>
                <input type="text" value="1" name="amt" id="ammount">
            </div>
            <div class="dropbox">
                <div class="from">
                    <p>From</p>
                    <div class="select-container">
                        <img src="https://flagsapi.com/US/flat/64.png" alt="">
                        <select name="from" id="select">
                        </select>
                    </div>
                </div>
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
                <div class="to">
                    <p>To</p>
                    <div class="select-container">
                        <img src="https://flagsapi.com/IN/flat/64.png" alt="">
                        <select name="to" id="select">
                        </select>
                    </div>
                </div>
            </div>
            <div class="output">
                1USD = 80 INR
            </div>
            <!-- HTML !-->
            <button class="button" role="button">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                    Get Exchange Rate
                </span>
            </button>
        </form>
    </div>
    <script src="codes.js"></script>
    <script src="script.js"></script>
</body>

</html>`, // truncated for simplicity
            cssCode: `* {
    margin: 0;
    padding: 0;
}
body{
    display: flex;
    justify-content:center ;
    align-items: center;
    min-height: 100vh;
    background-color: aqua;
}

.container{
    background: rgb(126, 230, 230);
    border-radius: 1rem;
    padding: 2rem;
    min-height: 45vh;
    width: 40wh;
}
form{
    margin: 2rem 0 1rem 0;
}

form select, button ,input{
    width: 100%;
    border: none;
    outline: none;
    border-radius: .2rem;

}

form input{
    border: 1px solid gray;
    height: 2.2rem;
    font-size: 1rem;
    padding-left: 0.5rem;
}
.dropbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.2rem;
}
.from{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.to{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.select-container{
    display: flex;
    gap: 2px;
    justify-content: center;
    align-items: center;
    width: 6rem;
    border-radius: .6rem;
    border: 1px solid white;
}
.output{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 1.3rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.select-container img{
    max-width: 2.3rem;
}
.select-container select {
   background: transparent;
   font-size: 1rem;
   
}
.select-container select option{
   background-color: rgba(0, 0, 0, 0.356);
   font-size: 1rem;
   
}
.from p{
    font-size: 1.1rem;
    margin:  0 5px;
}
.to p{
    font-size: 1.1rem;
    margin:  0 5px;
}

.ammount input{
    background-color: rgba(0, 0, 0, 0.173);
    color: white;
    font-size: 1rem;
    margin-top: 5px;
}
.ammount p{
    font-size: 1.3rem;
}

.dropbox i{
  font-size: 1.2rem;
}

/* CSS */
.button {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 20px;
}

.button-82-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

.button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}

.button-82-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}

@media (min-width: 768px) {
  .button-82-front {
    font-size: 1.25rem;
    padding: 12px 42px;
  }
}

.button:hover {
  filter: brightness(110%);
  -webkit-filter: brightness(110%);
}

.button:hover .button-82-front {
  transform: translateY(-6px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

.button:active .button-82-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.button:hover .button-82-shadow {
  transform: translateY(4px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}

.button:active .button-82-shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button:focus:not(:focus-visible) {
  outline: none;
}`, // truncated for simplicity
            jsCode: `const Base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropbox = document.querySelectorAll(".dropbox select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".output");

for (let select of dropbox) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    })
}

const updateExchamgeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtvalue = amount.value;
    if (amtvalue === "" || amtvalue < 1) {
        amtvalue = 1;
        amount.value = "1";
    }
    const URL = fetch(\`\${Base_url}/\${fromCurr.value.toLowerCase()}.json\`);
    let response = await URL;
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let finalAmt = (amtvalue * rate).toFixed(2);
    msg.innerText = \`\${amtvalue} \${fromCurr.value} = \${finalAmt} \${toCurr.value}\`;
};

const updateflag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = \`https://flagsapi.com/\${countryCode}/flat/64.png\`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchamgeRate();
});

window.addEventListener("load", () => {
    updateExchamgeRate();
});`, // truncated for simplicity
        },
        {
            title: "Weather App",
            liveUrl: "https://js-weather-app-gray.vercel.app/",
            htmlCode: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="card">
        <div class="searchbox">
            <input type="text" placeholder="enter city name" id="search" spellcheck="false">
            <button><img src="images/search.png" alt=""></button>
        </div>
        <div class="errortext">Invalid City name</div>
        <div class="weatherbox">
            <img src="images/drizzle.png" class="weather-icon">
            <h1 class="temp">20°c</h1>
            <h2 class="city">Bengaluru</h2>
            <div class="details">
                <div class="col">
                    <img src="images/humidity.png">
                    <div>
                        <p class="humidity">50%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="images/wind.png">
                    <div>
                        <p class="wind">12 Km/h</p>
                        <p>Wind speed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>

</html>`, // truncated for simplicity
            cssCode: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: rgb(28 22 51);
}

.card{

    width: 90vw;
    max-width: 500px;
    border: 2px solid blue;
    background: linear-gradient(135deg, #747e09, #2405ef);
    color: white;
    border-radius: 20px;
    padding: 40px 35px ;
    text-align: center;
    margin: 35px auto 0;
}

.searchbox{
    width: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.searchbox input{
    border: 0;
    outline: 0;
    background: #ebfffc;
    color: #555;
    padding: 10px 25px;
    border-radius: 30px;
    flex: 1;
    margin-right: 16px;
    font-size: 18px;
}

.searchbox button{
    border: 0;
    outline: 0;
    background: #ebfffc;
    color: #555;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
}
.searchbox button img{
    width: 16px;
}
.weather-icon{
    width: 180px;
    margin-top: 25px;
}
.weatherbox h1{
    font-size: 75px;
    font-weight: 600;
}
.weatherbox h2{
    font-size: 35px;
    font-weight: 400;
    margin-top: -10px;
}
.details{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 50px;
}

.col{
    display: flex;
    align-items: center;
    text-align: left;
    gap: 10px;
}
.col img{
    width: 40px;
    margin-right: 10px;
}
.humidity , .wind{
    font-size: 20px;
}

.weatherbox{
    visibility:hidden;
}
.errortext{
    font-size: 20px;
    text-align: left;
    margin-top: 15px;
    margin-left: 15px;
    display: none;
}`, // truncated for simplicity
            jsCode: `const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".searchbox input" );
const searchbtn = document.querySelector(".searchbox button" );
const input = document.getElementById("search");

const key = "c44e161b63c5d17851045461df9df905";
const temp = document.querySelector(".temp");
const cityname = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon= document.querySelector(".weather-icon");
const weatherbox = document.querySelector(".weatherbox");
const err = document.querySelector(".errortext");

async function checkweather(city) {
    const response = await fetch(url + city + \`&appid=\${key}\`);
    if(response.status == 404){
        err.style.display = "block";
        weatherbox.style.visibility="hidden";
    } else{
        var data = await response.json();
    temp.innerHTML=Math.round(data.main.temp)+"°c";
    cityname.innerHTML=data.name + \` (\${data.sys.country})\`;
    humidity.innerHTML= data.main.humidity + "%";
    wind.innerHTML=data.wind.speed + " km/h" ;
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloud.png";
    }
    
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/cloud.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    weatherbox.style.visibility="visible";
    err.style.display = "none";
    
    console.log(data);
    
    }
    
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchbtn.click();
    }
  });`, // truncated for simplicity
        },
        {
            title: "To Do App",
            liveUrl: "https://to-do-app-rose-five.vercel.app/",
            htmlCode: `
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>to-Do-list</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="todoCard">
         <h1 class="headingtext">
            mY tO-dO-lisT <img src="images/icon.png" alt="">
         </h1> 
         <div class="dobox">
                <input type="text" placeholder="write your work" class="inputBox">
                <button onclick="addbutton()">add</button> 
            </div> 
            <ul class="tasklist">
                <!-- <li class="checked">task1</li>
                <li>task2</li>
                <li>task3</li> -->
            </ul>
         
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
        `,
            cssCode: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
}

.container {
    width: 100%;
    height: 100vh;
    padding: 10px;
    background: linear-gradient(110deg, rgba(255, 0, 179, 0.685), blue);
}

.todoCard {
    width: 100%;
    max-width: 600px;
    background: white;
    border-radius: 15px;
    margin: 50px auto 75px;
    padding: 40px 30px 70px;
}

.todoCard h1 {
    display: flex;
    font-size: 32px;
    color: chocolate;
    font-weight: 600;
    align-items: center;
    gap: 25px;
    margin-left: 10px;

}

.todoCard h1 img {
    width: 50px;
}

.dobox {
    display: flex;
    justify-content: space-between;
    margin: 25px 20px 30px 0;
    background: whitesmoke;
    border-radius: 40px;
}

input {
    flex: 1;
    border: none;
    outline: none;
    border-radius: 40px;
    padding-left: 15px;
    background: transparent;
    font-size: 20px;
}

.dobox button {
    padding: 10px 35px;
    font-size: 20px;
    background: greenyellow;
    border-radius: 40px;
    border: none;
    cursor: pointer;
}

ul li {
    list-style: none;
    padding: 10px 15px 15px 50px;
    font-size: 22px;
    position: relative;
    max-width: 500px;
}

ul li::before {
    content: "";
    position: absolute;
    background-image: url(images/unchecked.png);
    background-position: center;
    background-size: cover;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    top: 10px;
    left: 8px;
    cursor: pointer;
}

ul li.checked{
    text-decoration: line-through;
    color: gray;
}
ul li.checked::before{
    background-image: url(images/checked.png);
}
 ul li span{
    position: absolute;
    right: 0;
    height: 40px;
    width: 40px;
    background: red;
    border-radius: 50%;
    text-align: center;
    line-height: 42px;
    font-size: 52px;
    color: white;
    cursor: pointer;

 }`,
            jsCode: `const inputBox = document.querySelector(".inputBox");
const  taskList = document.querySelector(".tasklist");

function addbutton(){
    if(inputBox.value === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML= "\u00D7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
taskList.addEventListener("click", function (event) {
  if(event.target.tagName === "LI")  {
    event.target.classList.toggle("checked")
    saveData();
  }
  else if(event.target.tagName === "SPAN"){
    event.target.parentElement.remove();
    saveData();
  }
},false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML)
}
function showData() {
    taskList.innerHTML = localStorage.getItem("data")
}
showData();`,
        },
        {
            title: "Spotify",
            liveUrl: "https://to-do-app-1qpq.vercel.app/",
            htmlCode: `
              <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify
    </title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="utility.css">
    <link rel="stylesheet" href="mediaquery.css">
</head>

<body>
    <nav class="navbar">
        <div class="logo margin1 ">
            <img class="filter" src="images&svg/logo.svg" alt="">
        </div>
        <div class="searchbar flex margin1">
            <div class="homelogo">
                <img src="images&svg/home.svg" class="filter" alt="home">
            </div>
            <div class="searchbox"> 
                <div class="search-box">
                <input type="text" class="search" id="searchInput" placeholder="what do you want to play?" >
                <div id="results" class="results-container"></div>
            </div>
                <div class="searchlogo">
                    <img src="images&svg/search.svg" alt="search">
                </div>
                <div class="browselogo">
                    <img src="images&svg/browse.svg" alt="browse">
                </div>
            </div>
        </div>
        <div class="signlog margin1">
            <button class="sign">Signup</button>
            <button class="login">login</button>
        </div>
    </nav>
    <div class="maincontent">
        <aside class="librarysection">
            <div class="library">
                <div class="libraryhead">
                    <img src="images&svg/library.svg" alt="">
                    <span>Your Library</span>
                </div>
                <div class="add">
                    <img src="images&svg/plus.svg" alt="">
                </div>
                <div class="closehamburger">
                    <img src="images&svg/close.svg" class="filter" alt="">
                </div>
            </div>
            <div class="playlist">
                <div class="playlistcard">
                    <h5>Create your first playlist</h5>
                    <h6>It's easy we wll help you</h6>
                    <button class="createplaylistbutton">Create play list</button>
                </div>
                <div class="playlistcard">
                    <h5>Let's find some podcasts to follow</h5>
                    <h6>We'll keep you updated on new episodes</h6>
                    <button class="browsepodcastbutton">Browse podcast</button>
                </div>
                <div class="songslist">
                    <h3>Device Songs</h3>
                    <ul>
                        <!-- Song List -->
                    </ul>
                </div>
            </div>
            <div class="playlistfooter">
                <div><a href="https://www.spotify.com/in-en/legal/"> <span>Legal</span></a></div>
                <div><a href="https://www.spotify.com/in-en/safetyandprivacy/"><span>Safety & Privacy Center</span></a>
                </div>
                <div><a href="https://www.spotify.com/in-en/legal/privacy-policy/"><span>Privacy Policy</span></a></div>
                <div><a href="https://www.spotify.com/in-en/legal/cookies-policy/"><span>Cookies</span></a></div>
                <div><a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3"><span>About Ads</span></a></div>
                <div><a href="https://www.spotify.com/in-en/accessibility/"><span>Accessibility</span></a></div>
            </div>
            <div class="language">
                <button class="languagebutton">
                    <img src="images&svg/globe.svg" class="filter" alt="">
                    English
                </button>
            </div>
        </aside>
        <section class="songsection">
            <div class="heading">
                <div class="artistheading">
                    <div class="hamburger">
                        <img src="images&svg/hmaburger.svg" class="filter" alt="">
                    </div>
                    <h2>Popular Artits</h2>
                </div>
                <div class="shomore">
                    <h5>Show more</h>
                </div>
            </div>
            <div class="cardbox">
            </div>
            <div class="playbar">
                <div class="songdetails">
                    <div class="songname">
                    </div>
                    <div class="songbutton">
                        <img id="prevsong" src="images&svg/prevsong.svg" alt="">
                        <img id="playsong" src="images&svg/playsong.svg" alt="">
                        <img id="nextsong" src="images&svg/nextsong.svg" alt="">
                    </div>
                    <div class="songduration">
                    </div>
                </div>
                <div class="songline">
                    <div class="playline"></div>
                    <div class="circle"></div>
                </div>
            </div>
        </section>
    </div>
    <script src="app.js"></script>
</body>

</html>
            `,
            cssCode: ` :root{
    --a:0;
}
* {
    margin: 0;
    padding: 0;
}

body {
    background: black;
    color: white;
    font-family: poppins, sans-serif;
}

.navbar {
    /* background: #161616; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo{
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img {
    padding: 3px;
    width: 32px;
}
.hamburger{
    display: none;
}

.closehamburger{
    display: none;
}

.homelogo {
    width: 28px;
    height: 28px;
    padding: 5px;
    background: rgb(32, 31, 31);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    margin-right: 5px;

}

.homelogo img {
    width: 22px;
    margin: 5px;
}

.searchbox {
    position: relative;
}

.searchlogo {
    position: absolute;
    left: 5px;
    top: 4px;
}

.searchlogo img {
    width: 22px;
    margin: 5px;
    filter: invert(.5);
}

.browselogo {
    position: absolute;
    right: 7px;
    top: 4px;
}

.browselogo img {
    filter: invert(.5);
    width: 22px;
    margin: 5px;
}

.search {
    width: 350px;
    height: 40px;
    border-radius: 25px;
    background: #161616;
    border: none;
    outline: none;
    color: white;
    padding-left: 35px;
    font-size: 1rem;
}

.signlog {
    margin-right: 15px;
}

.signlog button {
    padding: 11px 15px;
    width: 100px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
}

.signlog button:hover {
    transform: scale(1.1);
}

.sign {
    background: none;
    color: white;
}







/* Maincontent */

.maincontent {
    display: flex;
    gap: 4px;
    margin-top: 10px;
}

.librarysection {
    width: 25vw;
    /* border: 2px solid; */
    border-radius: 6px;
    padding: 5px 10px;
    background: #161616;

}

.library {
    display: flex;
    margin: 0 16px;
    margin-bottom: 30px;
    justify-content: space-between;
}

.libraryhead {
    display: flex;
    justify-content: center;
    gap: 4px;
    color: rgb(171, 170, 170);

}

.libraryhead img {
    width: 18px;
    filter: invert(.5);

}

.add {
    display: flex;
    justify-content: center;
}

.add img {
    width: 18px;
    filter: invert(.5);
}



/* Plasylistcard */
.playlist {
    max-height: 60vh;
    overflow-x: hidden;
    overflow-y: auto;
}

.playlistcard {
    margin: 15px 0px 15px 0px;
    background: #1e1e1e;
    border-radius: 12px;
    padding: 15px 10px;
}

.playlistcard h5,
h6 {
    font-weight: 600;
    margin-top: 6px;
}

.playlistcard button {
    margin-top: 20px;
    padding: 7px 15px;
    border-radius: 25px;
    font-weight: bolder;
    outline: none;
    border: none;
    cursor: pointer;
}

.playlistcard button:hover {
    transform: scale(1.1);
}

.playlistfooter {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 12px;
}

.playlistfooter a {
    font-size: .6rem;
    text-decoration: none;
    color: white;
    font-weight: 300;
    cursor: pointer;
}

.playlistcard button {
    background: rgba(44, 41, 41, 0.784);
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 7px 15px;
    border-radius: 25px;
    font-weight: bolder;
    border: none;
    font-weight: 400;
    margin-top: 15px;
}

.librarysection button img {
    width: 18px;
}

.librarysection button:hover {
    transform: scale(1.1);
}

.language button {
    background: rgba(44, 41, 41, 0.784);
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    border-radius: 25px;
    font-weight: bolder;
    border: 1px solid;
    font-weight: 400;
    margin-top: 15px;
    color: white;
    margin-left: 15px;
}
.songslist{
    padding: 5px 10px;
}
.songslist ul li {
    list-style: decimal;
    font-size: .8rem;
    padding: 8px 0;
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: center;
}
li .info{
    min-width: 160px;
}
.playnow{
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
}
/* Songsection */

.songsection {
    width: 75vw;
    border-radius: 6px;
    padding: 5px 10px;
    background: #161616;
    position: relative;
}

.heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    margin: 0 10px;
}

.heading h2,h5{
    font-weight: 500;
}
.cardbox{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-height: 75vh;
    overflow-x: hidden;
    overflow-y: scroll;
}
.card{
    max-height: 200px;
    margin: 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 1s;
}

.card:hover{
    --a:1;
}

.card img{
    width: 110px;
    height: 110px;
    object-fit:cover;
    border-radius: 50%;
}

.artistname{
    font-size: .9rem;
    color: rgb(222, 215, 215);
}
.profession{
    font-size: .8rem;
    color: rgb(104, 102, 102);
}
.playbutton{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #06f506;
    position: absolute;
    right: 15px;
    bottom: 60px;
    opacity: var(--a);
    transition:all 1s ease-in-out;
}
/* .playbutton:hover{
    bottom: 60px;
    opacity: 1;
} */

.playbutton img{
    width: 20px;
    height: 20px;
}


.playbar{
    position: absolute;
    bottom: 0;
    background: rgba(184, 243, 231, 0.645);
    width: 98%;
    padding: 10px 0px ;
    margin: 10px 0px;
    border-radius: .3rem;
}

.songbutton{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.playline{
    margin: 20px 4px 10px 4px;
    height: 2px;
    width: 98%;
    background: white;
    border: 2px solid white;
    border-radius: 10px;
    position: relative;
    margin-left: 4px;
    cursor: pointer;
}  
.circle{
    height: 20px;
    width: 5px;
    border-radius: 10%;
    background-color: aqua;
    position: absolute;
    bottom: 4px; 
    left: 0%;
    margin: 20px 4px 10px 4px;
}

.songbutton img{
    cursor: pointer;
}
.songdetails{
    display: flex;
    justify-content: space-around;
    width: 98%;
    align-items: center;
    font-size: 1rem;
}
#results {
    border: 1px solid #ccc;
    margin-top: 10px;
    max-height: 200px;
    overflow-y: auto;
}

.result-item {
    padding: 5px;
    cursor: pointer;
}

.result-item:hover {
    background-color: #f0f0f0;
}

.filter{
    filter:invert(1);

}

.border{
    border-radius: 7px;
}
.flex{
    display: flex;
}
.margin1{
    margin-top: 12px;;
    margin-left: 10px;
}

/* For Webkit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
    width: 12px; /* Adjust width as needed */
    background-color: #2c2c2c; /* Dark background for scrollbar track */
}

::-webkit-scrollbar-thumb {
    background-color: #444; /* Darker color for scrollbar thumb */
    border-radius: 10px; /* Rounded corners for the scrollbar thumb */
    border: 3px solid #2c2c2c; /* Optional: space around the thumb to blend with track */
}

::-webkit-scrollbar-thumb:hover {
    background-color: #666; /* Lighter color when hovered */
}

/* For Firefox */
* {
    scrollbar-width: thin; /* Thin scrollbar */
    scrollbar-color: #444 #2c2c2c; /* Scrollbar thumb and track colors */
}

/* For IE and Edge Legacy */
body {
    -ms-overflow-style: scrollbar; /* Ensure scrollbars are visible */
}
 `,
            jsCode: `console.log("Let's write babe..");
let currentsong = new Audio();
let currfolder;
let songs;

function formatSeconds(seconds) {
    if (seconds < 0) {
        throw new Error('Seconds cannot be negative');
    }

    const roundedSeconds = Math.round(seconds);

    const minutes = Math.floor(roundedSeconds / 60);
    const remainingSeconds = roundedSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return \`\${formattedMinutes}:\${formattedSeconds}\`;
}

async function getsongs(folder) {
    currfolder = folder;
    let a = await fetch(\`http://127.0.0.1:3000/\${folder}/\`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(\`/\${folder}/\`)[1])
        }
    }

    let songUL = document.querySelector(".songslist").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + \` <li>
                                <img src="images&svg/music.svg" class="filter" alt="">
                                <div class="info">
                                    <div>\${song.replaceAll("%20", " ")}</div>
                                    <div>Shivi</div>
                                </div>
                                <div class="playnow">
                                   <div> Play now</div>
                                    <img src="images&svg/playsong.svg" class="filter" alt="">
                                </div>
                            </li>\`;
    }

    Array.from(document.querySelector(".songslist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playmusic(e.querySelector(".info").firstElementChild.innerHTML);
        })
    });
}

const playmusic = (track, pause = false) => {
    currentsong.src = \`/\${currfolder}/\` + track;
    if (!pause) {
        currentsong.play();
        playsong.src = "images&svg/pause.svg";
    }
    document.querySelector(".songname").innerHTML = decodeURI(track);
    document.querySelector(".songduration").innerHTML = "00:00 / 00:00";
}

async function displayAlbums() {
    let a = await fetch(\`http://127.0.0.1:3000/songs/\`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let cardBox = document.querySelector(".cardbox");
    let array = Array.from(anchors);
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0];
            let a = await fetch(\`http://127.0.0.1:3000/songs/\${folder}/info.json\`);
            let response = await a.json();

            cardBox.innerHTML = cardBox.innerHTML + \`<div data-folder=\${folder} class="card">
                        <div class="image">
                            <img src="/songs/\${folder}/cover.jpg" alt="Pritam Da">
                        </div>
                        <div class="artistname">
                           \${response.title}
                        </div>
                        <div class="profession">
                            \${response.des}s
                        </div>
                        <div class="playbutton">
                            <img src="images&svg/play.svg" alt="">
                        </div>
                    </div>\`;
        }
    }

    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            await getsongs(\`songs/\${item.currentTarget.dataset.folder}\`);
            playmusic(songs[0]);
        });
    });
}

async function main() {
    await getsongs("songs/vibemood");
    playmusic(songs[0], true);
    displayAlbums();

    playsong.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            playsong.src = "images&svg/pause.svg";
        } else {
            currentsong.pause();
            playsong.src = "images&svg/playsong.svg";
        }
    });

    nextsong.addEventListener("click", () => {
        currentsong.pause();
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        if ((index + 1) < songs.length) {
            playmusic(songs[index + 1]);
        }
    });

    prevsong.addEventListener("click", () => {
        currentsong.pause();
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        if ((index - 1) > 0) {
            playmusic(songs[index - 1]);
        }
    });

    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songduration").innerHTML = \`\${formatSeconds(currentsong.currentTime)}/\${formatSeconds(currentsong.duration)}\`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 98 + "%";
    });

    document.querySelector(".playline").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 98;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = (currentsong.duration * percent) / 98;
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".librarysection").style.left = 0;
    });

    document.querySelector(".closehamburger").addEventListener("click", () => {
        document.querySelector(".librarysection").style.left = \`-100%\`;
    });

    currentsong.addEventListener('ended', () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
        if ((index + 1) < songs.length) {
            playmusic(songs[index + 1]);
        }
    });

    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            await getsongs(\`songs/\${item.currentTarget.dataset.folder}\`);
        });
    });
}

const filterSongs = (searchTerm) => {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    if (searchTerm.trim() === '') return;
    const filteredSongs = songs.filter(song => song.toLowerCase().includes(searchTerm.toLowerCase()));
    filteredSongs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('result-item');
        songElement.textContent = song.replaceAll('%20', ' ');
        songElement.onclick = () => {
            playmusic(song);
            resultsContainer.innerHTML = '';
            searchInput.value = '';
        };
        resultsContainer.appendChild(songElement);
    });
    if (filteredSongs.length === 0) {
        const noResultsElement = document.createElement('div');
        noResultsElement.textContent = 'No Results Found';
        resultsContainer.appendChild(noResultsElement);
    }
};

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (event) => {
    filterSongs(event.target.value);
});

main();
 `,
          }
       
        // Add more projects here
    ];

    return (
        <div>
            {/* Step 2: Map through projects array */}
            {projects.map((project, index) => (
                <ProjectShowcase
                    key={index}
                    title={project.title}
                    liveUrl={project.liveUrl}
                    htmlCode={project.htmlCode}
                    cssCode={project.cssCode}
                    jsCode={project.jsCode}
                />
            ))}
        </div>
    );
};

export default ProjectList;
