let getName = prompt("Merhaba ben Mehmet.Peki senin adın ne?");
let clock   = document.querySelector("#myClock");
let changeName = document.querySelector("#myName");
let newArray = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
let history = new Date();
let arrayInfo = history.getMonth();
clock.innerHTML = `${history.getDate()} ${newArray[arrayInfo]}`
changeName.innerHTML = getName.length>0 ? `Merhaba,  ${getName} !`:"Sende haklısın tanışmak için biraz aceleci davrandım :) <br>";