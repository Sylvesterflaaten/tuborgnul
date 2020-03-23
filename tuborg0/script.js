const values = [18.8, 49.1, 55.9, 65.7, 86.4, 94]
const valNum = [938700, 2453000, 2793000, 3283000, 4319000, 4699000]

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#skaal").addEventListener("click", clickSkaal);
    //til diagrammet
    document.querySelectorAll(".bars line").forEach((bar, i) => {
        bar.setAttribute("y1", 100 - values[i]);
        bar.setAttribute("data-value", valNum[i]);
        bar.addEventListener("mouseover", e => vis(e));
        bar.addEventListener("mouseout", skjul);
    });

    document.querySelector("#skaal").addEventListener("click", clickSkaal);
}

//funktioner til diagram
function vis(e) {
    document.querySelector("#output").textContent = "Antal liter alkoholfri øl solgt per år: " + e.target.dataset.value + " liter";
}

function skjul() {
    document.querySelector("#output").textContent = "Antal liter alkoholfri øl solgt per år:";
}


function clickSkaal() {
    document.querySelector("#left").classList.add("slide_left");
    document.querySelector("#right").classList.add("slide_right");
    document.querySelector("#klink").play();
    document.querySelector("#cheers").play();
    document.querySelector("#skaal").classList.remove("shake");

    document.querySelector("#skaal").removeEventListener("click", clickSkaal);
    document.querySelector("#skaal").addEventListener("click", skaalReset);
}

function skaalReset() {
    document.querySelector("#left").classList.remove("slide_left");
    document.querySelector("#right").classList.remove("slide_right");
    document.querySelector("#klink").pause();
    document.querySelector("#cheers").pause();
    document.querySelector("#klink").currentTime = 0;
    document.querySelector("#cheers").currentTime = 0;
    document.querySelector("#skaal").classList.add("shake");

    document.querySelector("#left").style.transform = "translateX(-100%)";
    document.querySelector("#right").style.transform = "translateX(100%)";

    document.querySelector("#skaal").removeEventListener("click", skaalReset);
    document.querySelector("#skaal").addEventListener("click", clickSkaal);
}
