// =========================
// LANGUAGE SYSTEM
// =========================
function setLanguage(lang) {
localStorage.setItem("language", lang);
document.querySelectorAll("[data-en]").forEach(element => {
if(element.dataset[lang]){
element.innerHTML = element.dataset[lang];
}
});
if(lang === "ar"){
document.body.setAttribute("dir","rtl");
} else {
document.body.setAttribute("dir","ltr");
}
}
document.addEventListener("DOMContentLoaded", () => {
const savedLanguage =
localStorage.getItem("language") || "en";
setLanguage(savedLanguage);
});
// =========================
// COUNTERS
// =========================
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
const updateCounter = () => {
const target =
+counter.getAttribute('data-target');
const current =
+counter.innerText;
const increment =
target / 100;
if(current < target){
counter.innerText =
Math.ceil(current + increment);
setTimeout(updateCounter,20);
}else{
counter.innerText = target;
}
};
updateCounter();
});
// =========================
// FAQ
// =========================
const faqItems =
document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
const button =
item.querySelector('.faq-question');
button.addEventListener('click', () => {
item.classList.toggle('active');
});
});
// =========================
// SERVICES
// =========================
const expandButtons =
document.querySelectorAll('.expand-btn');
expandButtons.forEach(button => {
button.addEventListener('click', () => {
const details =
button.nextElementSibling;
if(details.style.display === 'block'){
details.style.display = 'none';
button.innerText = 'Learn More';
}else{
details.style.display = 'block';
button.innerText = 'Show Less';
}
});
});
// =========================
// CALCULATOR
// =========================
const websiteType =
document.getElementById('websiteType');
const logoOption =
document.getElementById('logoOption');
const seoOption =
document.getElementById('seoOption');
const socialOption =
document.getElementById('socialOption');
const totalPrice =
document.getElementById('totalPrice');
const quoteButton =
document.getElementById('quoteButton');
function updatePrice(){
if(!websiteType) return;
let total =
Number(websiteType.value);
if(logoOption.checked){
total += 15;
}
if(seoOption.checked){
total += 50;
}
if(socialOption.checked){
total += 75;
}
totalPrice.innerText =
'$' + total;
if(quoteButton){
quoteButton.href =
`https://wa.me/9647515847687?text=Hi Tala Management, I would like a quote for a package worth $${total}`;
}
}
if(websiteType){
websiteType.addEventListener(
'change',
updatePrice
);
logoOption.addEventListener(
'change',
updatePrice
);
seoOption.addEventListener(
'change',
updatePrice
);
socialOption.addEventListener(
'change',
updatePrice
);
updatePrice();
}
// =========================
// TESTIMONIALS
// =========================
const testimonials =
document.querySelectorAll(
'.testimonial'
);
let currentSlide = 0;
if(testimonials.length){
setInterval(() => {
testimonials[currentSlide]
.classList.remove('active');
currentSlide++;
if(currentSlide >=
testimonials.length){
currentSlide = 0;
}
testimonials[currentSlide]
.classList.add('active');
},4000);
}
// =========================
// SMOOTH SCROLL
// =========================
document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {
anchor.addEventListener(
'click',
function(e){
e.preventDefault();
const target =
document.querySelector(
this.getAttribute('href')
);
if(target){
target.scrollIntoView({
behavior:'smooth'
});
}
});
});
// =========================
// LOADED
// =========================
console.log(
'Tala Management Loaded Successfully'
);
console.log('Tala Management Loaded');

function sendQuote(){

const name = document.getElementById("quoteName").value;
const email = document.getElementById("quoteEmail").value;
const phone = document.getElementById("quotePhone").value;
const service = document.getElementById("quoteService").value;
const details = document.getElementById("quoteDetails").value;

const message =
`Hello Tala Management,

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Details:
${details}`;

window.open(
`https://wa.me/9647515847687?text=${encodeURIComponent(message)}`,
'_blank'
);

}
