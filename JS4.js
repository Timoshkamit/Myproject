let poluch = document.querySelector(".Polev");
let button = document.querySelector("button");
let lbvivod = document.querySelector(".vivod");

async function GetINFO(){
    MyUrl = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + poluch.value + "&appid=f19076d7c03a5433a373cc53fdd35c09");
    MyUrl = await MyUrl.text();
    MyUrl = await JSON.parse(MyUrl);
    lbvivod.innerHTML = (Math.round(MyUrl.main["temp"]-273) + " Градуса по цельсию");
}


button.onclick = GetINFO;
