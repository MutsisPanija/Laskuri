//document.getElementById("laskuri-el").innerText = 5

let nimi = "Tarmo"
let tervehdys = "Moi "
let laskuri = 0
let tallennus = "Kävijät: "

document.getElementById
let tervehdyskutsu = document.getElementById("tervehdys-el")
console.log(tervehdys+nimi)
tervehdyskutsu.innerText=tervehdys+nimi
let kutsuttutallennus = document.getElementById("tallennus-el")
kutsuttutallennus.innerText = tallennus

function lisays(){
    laskuri = laskuri + 1
    document.getElementById("laskuri-el").innerText = laskuri
}
function poisto(){
    laskuri = laskuri - 1
    document.getElementById("laskuri-el").innerText = laskuri
}
function tallenna(){
    console.log(laskuri)
    tallennus = tallennus + " - " + laskuri
    kutsuttutallennus.textContent = tallennus
}
function nollaus() {
    laskuri = laskuri - laskuri
    document.getElementById("laskuri-el").innerText = laskuri
}
function historianollaus(){
    document.getElementById("tallennus-el").innerText = ("Kävijät: ")
    tallennus = ("Kävijät: ")
}

// ei kusekkaa