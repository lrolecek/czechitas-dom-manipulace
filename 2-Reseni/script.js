// v dokumentu vybereme prvek, který chceme měnit a uložíme si ho do proměnné
let nadpis = document.querySelector('h1');

// změníme CSS vlastnosti nadpisu
nadpis.style.color ='red';
nadpis.style.backgroundColor ='yellow';

// změníme textový obsha prvku
nadpis.textContent = 'Učím se JavaScript';


// vybereme odstavec a nastavíme mu nějaké další CSS vlastnosti a změníme jeho HTML obsah
let odstavec = document.querySelector('p');
odstavec.innerHTML = "Nový text odstavce může být i <strong>tučným</strong> písmem.";
odstavec.style.fontFamily = 'cursive';
odstavec.style.fontStyle = 'italic';
odstavec.style.fontSize = '48px';


// vybereme obrázek a změníme ho z kočky na psa
let obrazek = document.querySelector('img');
obrazek.src = 'obrazky/pes.jpg';


// vybereme jednorozce a posuneme ho do ohrádky
let jednorozec = document.querySelector('#jednorozec');
jednorozec.style.left = '430px';
jednorozec.style.top = '220px';


// ctverecku po kliknuti p5id8me/odebereme nebo vymeníme třídu aktivni
// musime si ji nejdřív vytvořit v CSS
// událost onClick přidáme na čtvereček v HTML
function priKliknuti() {
  let ctverecek = document.querySelector('.ctverecek');
  ctverecek.classList.toggle('aktivni');
}
