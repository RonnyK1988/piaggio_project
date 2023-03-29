// Variable wird dem src Attribut des Herobildes zugewiesen

let heroImg = document.getElementById('hero-img');

// Array mit den Pfaden der Sliderbilder

const srcArray = ["images/piaggio_baci_liberty.webp",
"images/piaggio_1_electric.jpg",
"images/piaggio_400_S_5.webp",
"images/piaggio_liberty.webp",
"images/piaggio_mp3_530_3.webp"
]

// Startbild festlegen

let i = 0;
heroImg.src = srcArray[i];
   
/* Funktion um alle 5s das Sliderbild zu wechseln, in Endlosschleife und aktiven radio ändern */


const autoSlide = () => {
        if (i>4) {i=0;
              heroImg.src = srcArray[i];
              img1.classList.add('radio-active');
              img2.classList.remove('radio-active');
              img3.classList.remove('radio-active');
              img4.classList.remove('radio-active');
              img5.classList.remove('radio-active');
              return i;
        }
        else {  
                heroImg.src = srcArray[i];
                switch(i) {
                    case 1: img1.classList.remove('radio-active');
                            img2.classList.add('radio-active');
                            img3.classList.remove('radio-active');
                            img4.classList.remove('radio-active');
                            img5.classList.remove('radio-active');
                            break;
                    case 2: img1.classList.remove('radio-active');
                            img2.classList.remove('radio-active');
                            img3.classList.add('radio-active');
                            img4.classList.remove('radio-active');
                            img5.classList.remove('radio-active');
                            break;
                    case 3: img1.classList.remove('radio-active');
                            img2.classList.remove('radio-active');
                            img3.classList.remove('radio-active');
                            img4.classList.add('radio-active');
                            img5.classList.remove('radio-active');
                            break;
                    case 4: img1.classList.remove('radio-active');
                            img2.classList.remove('radio-active');
                            img3.classList.remove('radio-active');
                            img4.classList.remove('radio-active');
                            img5.classList.add('radio-active');
                }
                i++;
               return i;
        }
}

let sliderInterval = setInterval(autoSlide,5000);


// bei rechts oder links klick ein bild vor oder zurück in endlosschleife

const clickRightArrow = () => {
    i++;
    heroImg.src = srcArray[i];
    switch(i) {
        case 1: img1.classList.remove('radio-active');
                img2.classList.add('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
                break;
        case 2: img1.classList.remove('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.add('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
                break;
        case 3: img1.classList.remove('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.add('radio-active');
                img5.classList.remove('radio-active');
                break;
        case 4: img1.classList.remove('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.add('radio-active');
    }
    if (i > 4) {
        i=0;
        heroImg.src = srcArray[i];
        img1.classList.add('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
    }
    return i;
}

const clickLeftArrow = () => {
    i--;
    heroImg.src = srcArray[i];
    switch(i) {
        case 0: img1.classList.add('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
                break;
        case 1: img1.classList.remove('radio-active');
                img2.classList.add('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
                break;
        case 2: img1.classList.remove('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.add('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
                break;
        case 3: img1.classList.remove('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.add('radio-active');
                img5.classList.remove('radio-active');
                break;
    }
    if (i < 0) {
        i=4;
        heroImg.src = srcArray[i];
        img1.classList.remove('radio-active');
        img2.classList.remove('radio-active');
        img3.classList.remove('radio-active');
        img4.classList.remove('radio-active');
        img5.classList.add('radio-active');
    }
    return i;
}


// Pfeiltasten bekommen Variablen

const leftArrow = document.getElementsByClassName('left-arrow')[0];
const rightArrow = document.getElementsByClassName('right-arrow')[0];


// die jeweiligen Funktionen werden bei Pfeilklick aufgerufen
rightArrow.onclick = clickRightArrow;
leftArrow.onclick = clickLeftArrow;


// Auswahl des Bildes per Radio Button

// Radio buttons bekommen Variablen

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');


/* Funktionen für Bildwechsel bei klick auf Radiobuttons und hervorheben des aktuellen bildes*/

const changeToImg1 = () => {
    i=0;
    heroImg.src = srcArray[i];
                img1.classList.add('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
    return i;
}

const changeToImg2 = () => {
    i=1;
    heroImg.src = srcArray[i];
                img1.classList.remove('radio-active');
                img2.classList.add('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
    return i;
}

const changeToImg3 = () => {
    i=2;
    heroImg.src = srcArray[i];
                img1.classList.remove('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.add('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.remove('radio-active');
    return i;
}

const changeToImg4 = () => {
    i=3;
    heroImg.src = srcArray[i];
                img1.classList.remove('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.add('radio-active');
                img5.classList.remove('radio-active');
    return i;
}

const changeToImg5 = () => {
    i=4;
    heroImg.src = srcArray[i];
                img1.classList.remove('radio-active');
                img2.classList.remove('radio-active');
                img3.classList.remove('radio-active');
                img4.classList.remove('radio-active');
                img5.classList.add('radio-active');
    return i;
}



// Aufruf der Funktionen zum Bildwechsel bei Klick auf die Radiobuttons


img1.onclick = changeToImg1;
img2.onclick = changeToImg2;
img3.onclick = changeToImg3;
img4.onclick = changeToImg4;
img5.onclick = changeToImg5;


// Play und Pause für automatischen Bildwechsel


// Play Pause Button bekommt eine Variable

const pause = document.getElementById('pause');
const play = document.getElementById('play');

// Funktion zum pausieren des Sliders

const pauseSlider = () => {
    clearInterval(sliderInterval);
};


// Funktion zum wieder abspielen des Sliders
const playSlider = () => {
    sliderInterval = setInterval(autoSlide,5000);;
}

// Events beim klicken von Play und Pause

pause.onclick = pauseSlider;
play.onclick = playSlider;


