var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
var Sidemenu= document.getElementById("sidemenu");

function openmenu(){
    Sidemenu.style.right = "0";
}
function closemenu(){
    Sidemenu.style.right = "-100px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyLsdlNhzbFowb84L97K9DQ_5akLCGAEecL8f7ALVuIHEWfRpPrqmYS-VzQ_4Lv4LFg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent succesfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})