
const element1 = document.querySelector('#typewriter1');
const bigText = "Hi Evey, time flies with you and sometimes I get at a loss for words when talking about us. I thought I could fix both those things by coding it. :)";
const element2 = document.querySelector('#typewriter2');
const smallText = "In case we lose track of it over the years, here is how long its been since you've given me the chance to love you:";

function updateText(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => { updateText(element, text, i + 1)}, 30);

    
}

setTimeout(() => { updateText(element1, bigText) }, 100);
//setTimeout(() => { updateText(element2, smallText)}, 4950);