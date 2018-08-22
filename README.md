# Podklady pro manipulaci DOM v JavaScriptu

Cvičení na změnu vlastností HTML prvků pomocí JavaScriptu.

Jako základ je potřeba vysvětlit, jak vybírat prvky v dokumentu:

```javascript
let prvek = document.querySelector('h1');
```

Potom postupně procvičovat jednotlivé možnosti, jak měnit vzhled prvku:

* měnit přímo CSS vlasnosti, jako je color, backgroundColor, top, left, atd.

```javascript
prvek.style.color = 'red';
```

* měnit textový obsah prvku

```javascript
prvek.textContent = 'toto je nový text';
```

* měnit HTML obsah prvku - nejprve ukázat, proč nemůžeme HTML značky psát dovnitř textContent

```javascript
prvek.innerHTML = 'toto je <strong>tučný</strong> text';
```

* přidávat a odebírat prvku CSS třídy pomocí classList

```javascript
prvek.classList.add('pridana-trida');
prvek.classList.remove('odebrana-trida');
```

* později, až v souvislosti s click eventem ukázat i přepínání CSS třídy

```javascript
prvek.classList.togle('prepinana-trida');
```

## Události

Zběžně vysvětlit, co je událost a jaké máme. "Něco, co se stane, když uživatel klikne myší na prvek."

Události na objekty pro jednoduchost přidáváme v HTML:

```html
<button onclick="priKliknuti();"> Čudlík </button>
```

Ovladače událostí pojmenováváme česky, aby bylo jasné, že je to naše funkce. Volíme pro jednoduchost názvy jako priKliknuti(), priStiskuKlavesy(), priNajetiMysi(), priOdjetiMysi(), atd.

Ukážeme, jak třeba při kliknutí na čtvereček můžeme změnit jeho barvu.


```html
<div class="ctverecek" onclick="priKliknuti();"> Čtvereček </div>
```

```javascript
function priKliknuti() {
  let stverecek = document.querySelector('.ctverecek');
  ctverecek.classList.add('aktivni');
}
```

Jak bychom vyřešili, kdybychom chtěli čtvereček prvním kliknutím aktivovat a druhýmm zase deaktivovat? Můžeme použít právě toggle.

```javascript
ctverecek.classList.toggle('aktivni');
```

## Další

V HTML je i ```<audio>``` element. Uk86eme si, jak jednodu3e spustit zvuk.

```javascript
let zvuk = document.querySelector('#hudba');
zvuk.play();

// případně i zastavit
zvuk.pause();
```
