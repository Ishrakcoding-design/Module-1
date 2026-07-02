// =======================
// TYPING EFFECT
// =======================


let text = [
    "Web Developer",
    "Graphic Designer",
    "UI Designer",
    "Creative Person"
];


let index = 0;
let char = 0;


let typing = document.getElementById("typing");


function type() {

    if (char < text[index].length) {

        typing.innerHTML += text[index].charAt(char);

        char++;

        setTimeout(type, 100);

    }

    else {

        setTimeout(erase, 1500);

    }

}



function erase() {

    if (char > 0) {

        typing.innerHTML =
            text[index].substring(0, char - 1);

        char--;

        setTimeout(erase, 50);

    }

    else {

        index++;

        if (index >= text.length) {

            index = 0;

        }


        setTimeout(type, 500);

    }

}



type();







// =======================
// DARK / LIGHT MODE
// =======================


let mode =
    document.getElementById("mode");



mode.onclick = () => {


    document.body.classList.toggle("light");



    if (document.body.classList.contains("light")) {


        mode.innerHTML = "☀️";


        localStorage.setItem(
            "theme",
            "light"
        );


    }

    else {


        mode.innerHTML = "🌙";


        localStorage.setItem(
            "theme",
            "dark"
        );


    }



};






// SAVE THEME


if (localStorage.getItem("theme")
    === "light") {


    document.body.classList.add("light");

    mode.innerHTML = "☀️";


}








// =======================
// BACK TO TOP
// =======================


let topBtn =
    document.getElementById("top");



window.onscroll = function () {


    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }


};



topBtn.onclick = function () {


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


};








// =======================
// SCROLL ANIMATION
// =======================


let cards =
    document.querySelectorAll(
        ".card,.project,.stats div"
    );



window.addEventListener(
    "scroll",
    () => {


        cards.forEach(card => {


            let position =
                card.getBoundingClientRect().top;



            let screen =
                window.innerHeight;



            if (position < screen - 100) {


                card.style.opacity = "1";

                card.style.transform =
                    "translateY(0)";


            }



        });


    });






// INITIAL ANIMATION


cards.forEach(card => {


    card.style.opacity = "0";


    card.style.transform =
        "translateY(50px)";


    card.style.transition =
        "0.6s";


});







// =======================
// BUTTON CLICK EFFECT
// =======================



let buttons =
    document.querySelectorAll(
        "button"
    );



buttons.forEach(btn => {


    btn.addEventListener(
        "click",
        () => {


            btn.style.transform =
                "scale(.9)";


            setTimeout(() => {


                btn.style.transform =
                    "scale(1)";


            }, 100);



        });


});