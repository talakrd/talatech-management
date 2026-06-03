function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}

const translations = {

en:{
home:"Home",about:"About",services:"Services",process:"Process",
portfolio:"Portfolio",pricing:"Pricing",faq:"FAQ",contact:"Contact",

title:"We Build Digital Systems That Grow Businesses",
subtitle:"Modern websites, branding, marketing, SEO, and social media management for real business growth.",
btn1:"View Pricing",
btn2:"Contact Us",

aboutTitle:"About Tala Management",
aboutText:"We are a digital agency focused on building powerful online systems that help businesses attract customers and grow revenue consistently.",

mission:"Mission",
missionText:"Deliver high quality digital solutions that create real business results.",
vision:"Vision",
visionText:"Become a leading digital agency in the region and beyond.",
value:"Value",
valueText:"Quality, speed, trust, and long-term growth.",

statsTitle:"Our Impact",
sweb:"Websites Built",
sclients:"Business Clients",
scampaigns:"Marketing Campaigns",
ssat:"Client Satisfaction",

servicesTitle:"Our Services",
srv1:"Modern fast websites starting from $99",
srv2:"Business websites with SEO and structure",
srv3:"Premium systems with full branding",
srv4:"Professional logo design $15",
srv5:"Photo editing from $5 per photo",
srv6:"Social media management $75/month",

processTitle:"Our Process",
p1:"We understand your business",
p2:"We plan strategy",
p3:"We design your system",
p4:"We develop everything",
p5:"We test and improve",
p6:"We launch and support",

portfolioTitle:"Our Work",

pricingTitle:"Pricing Plans",
price1:"Basic Website - $99",
price2:"Business Website - $250",
price3:"Premium Website - $500",

faqTitle:"Frequently Asked Questions",
faq1:"Projects usually take 1–7 days.",
faq2:"We offer full support after delivery.",
faq3:"Yes, revisions are included.",
faq4:"We work with global clients.",

contactTitle:"Contact Us"
},

ku:{
home:"سەرەتا",about:"دەربارە",services:"خزمەتگوزاری",process:"پرۆسە",
portfolio:"کارەکان",pricing:"نرخ",faq:"پرسیار",contact:"پەیوەندی",

title:"سیستەمی دیجیتاڵ دروست دەکەین بۆ گەشەپێدانی بزنس",
subtitle:"وێبسایت و مارکێتینگ و براندینگ بۆ گەشەی راستەقینە.",

aboutTitle:"دەربارەی Tala Management",
aboutText:"ئێمە سیستەمی دیجیتاڵ دروست دەکەین بۆ گەشەپێدانی بزنس و زیادکردنی فرۆشتن.",

mission:"ئەرک",
missionText:"دابینکردنی چارەسەری دیجیتاڵی باش.",
vision:"بینین",
visionText:"بوون بە باشترین ئاژانسی دیجیتاڵ.",
value:"نرخ",
valueText:"جۆرایەتی، خێرایی، متمانە.",

statsTitle:"ئەنجامەکان",
sweb:"وێبسایت دروستکراو",
sclients:"کڕیار",
scampaigns:"کەمپەین",
ssat:"ڕازیبوون",

servicesTitle:"خزمەتگوزاری",
srv1:"وێبسایتی نوێ لە $99",
srv2:"وێبسایتی بزنس",
srv3:"سیستەمی پڕ",
srv4:"لوگو $15",
srv5:"دەستکاری وێنە",
srv6:"سۆشیال میدیا $75",

processTitle:"کارکردن",
p1:"تێگەیشتن لە بزنس",
p2:"پلاندانان",
p3:"دیزاین",
p4:"دروستکردن",
p5:"تاقیکردنەوە",
p6:"بڵاوکردنەوە",

portfolioTitle:"کارەکان",

pricingTitle:"نرخەکان",
price1:"سەرەتایی $99",
price2:"بزنس $250",
price3:"پرێمیۆم $500",

faqTitle:"پرسیارەکان",
faq1:"1–7 ڕۆژ",
faq2:"پاڵپشتی هەیە",
faq3:"گۆڕانکاری هەیە",
faq4:"کڕیارە جیهانیەکان",

contactTitle:"پەیوەندی"
},

ar:{
home:"الرئيسية",about:"حول",services:"الخدمات",process:"العملية",
portfolio:"الأعمال",pricing:"الأسعار",faq:"الأسئلة",contact:"اتصال",

title:"نقوم ببناء أنظمة رقمية لتنمية الأعمال",
subtitle:"مواقع وتسويق وعلامات تجارية لنمو حقيقي للأعمال.",

aboutTitle:"حول Tala Management",
aboutText:"نساعد الشركات على النمو عبر الإنترنت باستخدام أنظمة رقمية قوية.",

mission:"المهمة",
missionText:"تقديم حلول رقمية عالية الجودة.",
vision:"الرؤية",
visionText:"أن نصبح وكالة رقمية رائدة.",
value:"القيمة",
valueText:"الجودة والسرعة والثقة.",

statsTitle:"نتائجنا",
sweb:"مواقع تم إنشاؤها",
sclients:"عملاء",
scampaigns:"حملات",
ssat:"رضا العملاء",

servicesTitle:"الخدمات",
srv1:"مواقع حديثة من $99",
srv2:"مواقع أعمال",
srv3:"أنظمة متقدمة",
srv4:"تصميم شعار $15",
srv5:"تعديل صور",
srv6:"إدارة سوشيال ميديا $75",

processTitle:"طريقة العمل",
p1:"فهم العمل",
p2:"التخطيط",
p3:"التصميم",
p4:"التطوير",
p5:"الاختبار",
p6:"الإطلاق",

portfolioTitle:"أعمالنا",

pricingTitle:"الأسعار",
price1:"أساسي $99",
price2:"أعمال $250",
price3:"بريميوم $500",

faqTitle:"الأسئلة",
faq1:"1–7 أيام",
faq2:"دعم كامل",
faq3:"تعديلات متاحة",
faq4:"عملاء عالميون",

contactTitle:"اتصل بنا"
}
};

function setLang(lang){
document.querySelectorAll("[data-i18n]").forEach(el=>{
const key = el.getAttribute("data-i18n");
el.innerText = translations[lang][key] || "";
});
}

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("active");
}
});
});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});
