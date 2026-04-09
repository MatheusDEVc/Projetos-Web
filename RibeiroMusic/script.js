// ===============================
// CONFIGURAÇÕES DO SITE
// ===============================

// coloque seu numero aqui
const whatsappNumber = "351938610646"

// mensagem automática
const whatsappMessage = "Olá, Matheus! Tenho interesse em aulas de saxofone."

// ===============================
// BOTÃO WHATSAPP
// ===============================

const whatsappBtn = document.getElementById("btnWhatsapp")

if(whatsappBtn){

whatsappBtn.addEventListener("click", () => {

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

window.open(url, "_blank")

})

}


// ===============================
// BOTÃO AGENDAR AULA
// ===============================

const agendarBtn = document.getElementById("btnAgendar")

if(agendarBtn){

agendarBtn.addEventListener("click", () => {

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, Matheus! Gostaria de agendar uma aula experimental de saxofone.")}`

window.open(url, "_blank")

})

}


// ===============================
// SCROLL SUAVE NO MENU
// ===============================

const menuLinks = document.querySelectorAll('nav a')

menuLinks.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault()

const targetId = this.getAttribute("href")

const targetSection = document.querySelector(targetId)

targetSection.scrollIntoView({
behavior: "smooth"
})

})

})


// ===============================
// DESTACAR MENU ATIVO
// ===============================

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("nav a")

window.addEventListener("scroll", () => {

let current = ""

sections.forEach(section => {

const sectionTop = section.offsetTop
const sectionHeight = section.clientHeight

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id")

}

})

navLinks.forEach(link => {

link.classList.remove("active")

if(link.getAttribute("href") === "#" + current){

link.classList.add("active")

}

})

})


// ===============================
// ANIMAÇÃO AO APARECER
// ===============================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0)"

}

})

})


const cards = document.querySelectorAll(".card")

cards.forEach(card => {

card.style.opacity = 0
card.style.transform = "translateY(30px)"
card.style.transition = "all 0.6s ease"

observer.observe(card)

})


// ===============================
// DEBUG INICIAL
// ===============================

console.log("Site de aulas de saxofone carregado com sucesso 🎷")


const onlineBtn = document.getElementById("btnOnline")

if(onlineBtn){

onlineBtn.addEventListener("click", () => {

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre as aulas online de saxofone.")}`

window.open(url, "_blank")

})

}