//==================================================
// LA NOTTE
//==================================================

//==============================
// ELEMENTOS
//==============================

const preloader =
document.getElementById("preloader");

const welcome =
document.getElementById("welcome");

const content =
document.getElementById("content");

const startButton =
document.getElementById("startExperience");

const music =
document.getElementById("music");

const musicButton =
document.getElementById("musicButton");

//==============================
// CONFIGURAÇÃO INICIAL
//==============================

content.style.display = "none";

music.volume = 0.35;

//==============================
// PRELOADER
//==============================

window.addEventListener("load", () => {

    setTimeout(() => {

        preloader.classList.add("hidden");

    }, 1800);

});

//==============================
// INICIAR EXPERIÊNCIA
//==============================

startButton.addEventListener("click", () => {

    music.play();

    musicButton.classList.add("show");

    showWelcome();

});

//==============================
// BENVENUTI
//==============================

function showWelcome() {

    welcome.classList.add("show");

    setTimeout(() => {

        welcome.classList.remove("show");

        openContent();

    }, 1800);

}

//==============================
// ABRIR CONTEÚDO
//==============================

function openContent() {

    content.style.display = "block";

    document.getElementById("hero")
        .style.display = "none";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

//==============================
// BOTÃO MÚSICA
//==============================

musicButton.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicButton.classList.remove("paused");

    }

    else{

        music.pause();

        musicButton.classList.add("paused");

    }

});

//==================================================
// ANIMAÇÕES AO ROLAR A PÁGINA
//==================================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

sections.forEach((section)=>{

    observer.observe(section);

});

//==================================================
// CAMPO DE ACOMPANHANTE
//==================================================

const guestOptions =
document.querySelectorAll("input[name='guest']");

const guestField =
document.getElementById("guestField");

guestOptions.forEach((option)=>{

    option.addEventListener("change",()=>{

        if(option.value==="Sim"){

            guestField.classList.remove("hidden");

            guestField.animate([

                {
                    opacity:0,
                    transform:"translateY(-15px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:350,
                easing:"ease"

            });

        }

        else{

            guestField.classList.add("hidden");

            document
                .getElementById("guestName")
                .value="";

        }

    });

});

//==================================================
// ESCOLHA DA DATA
//==================================================

const dateCards =
document.querySelectorAll(".date-card");

dateCards.forEach((card)=>{

    card.addEventListener("click",()=>{

        card.animate([

            {

                transform:"scale(.96)"

            },

            {

                transform:"scale(1)"

            }

        ],{

            duration:180

        });

    });

});

//==================================================
// EFEITO PARALLAX
//==================================================

//==================================================
// EFEITO PARALLAX
//==================================================

const olive = document.querySelector(".olive-left");
const lemon = document.querySelector(".lemon-right");

window.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    olive.style.transform =
        `translate(${x * 18}px, ${y * 18}px)`;

    lemon.style.transform =
        `translate(${-x * 18}px, ${-y * 18}px)`;

});



//==================================================
// BOTÕES
//==================================================

const buttons =
document.querySelectorAll(".primary-button");

buttons.forEach((button)=>{

    button.addEventListener("mousedown",()=>{

        button.style.transform="scale(.98)";

    });

    button.addEventListener("mouseup",()=>{

        button.style.transform="";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="";

    });

});

//==================================================
// FORMULÁRIO
//==================================================

const form =
document.getElementById("interestForm");

const successScreen =
document.getElementById("successScreen");

const submitButton =
document.getElementById("submitButton");

//==================================================
// SUBMIT
//==================================================

form.addEventListener("submit",async(e)=>{

    e.preventDefault();

    if(!validateForm()){

        return;

    }

    loadingButton();

    try{

        await sendForm();

        showSuccess();

    }

    catch(error){

        alert(

            "Não foi possível enviar sua manifestação. Tente novamente."

        );

        resetButton();

    }

});

//==================================================
// VALIDAÇÃO
//==================================================

function validateForm(){

    const name =
    document.getElementById("name");

    if(name.value.trim()===""){

        name.focus();

        shake(name);

        return false;

    }

    return true;

}

//==================================================
// BOTÃO
//==================================================

function loadingButton(){

    submitButton.disabled=true;

    submitButton.innerHTML=

    "Enviando...";

}

function resetButton(){

    submitButton.disabled=false;

    submitButton.innerHTML=

    "Reservar meu lugar";

}

//==================================================
// ENVIO
//==================================================

async function sendForm(){

    // Integraremos ao Google Forms
    // ou Apps Script posteriormente.

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve();

        },1500);

    });

}

//==================================================
// TELA GRAZIE
//==================================================

function showSuccess(){

    successScreen.classList.add("show");

    form.reset();

    guestField.classList.add("hidden");

    resetButton();

}

//==================================================
// SHAKE
//==================================================

function shake(element){

    element.animate([

        {

            transform:"translateX(0)"

        },

        {

            transform:"translateX(-8px)"

        },

        {

            transform:"translateX(8px)"

        },

        {

            transform:"translateX(-6px)"

        },

        {

            transform:"translateX(6px)"

        },

        {

            transform:"translateX(0)"

        }

    ],{

        duration:350

    });

}

//==================================================
// FECHAR GRAZIE
//==================================================

successScreen.addEventListener("click",()=>{

    successScreen.classList.remove("show");

});

//==================================================
// SCROLL SUAVE
//==================================================

document.querySelectorAll("a[href^='#']").forEach((anchor)=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        document.querySelector(

            anchor.getAttribute("href")

        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});

//==================================================
// ANO AUTOMÁTICO
//==================================================

const year=document.getElementById("year");

if(year){

    year.textContent=

    new Date().getFullYear();

}

//==================================================
// FIM DO SCRIPT
//==================================================