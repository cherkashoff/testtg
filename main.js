const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
e.preventDefault()

var text = document.querySelector("#text").value
var text2 = document.querySelector("#text2").value
var text3 = document.querySelector("#text3").value

var token = "7465232631:AAGW1wbpreifiFTYehdHdytIGoHkoCZKdKw"

var chat_id = "-1002182390565"

var my_text = `Name: ${text}   |   ` 
var my_text2 = `Telephone: ${text2}   |   `
var my_text3 = `Comment: ${text3}   |   `


var textall = my_text + my_text2 + my_text3

var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${textall}`

let api = new XMLHttpRequest()
api.open("GET", url, true)
api.send()

text.value = ""

})