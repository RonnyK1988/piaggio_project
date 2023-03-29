// Klasse um neue Modele ins System einzupflegen
let scooterContainer = document.getElementById("model-types");




class ScooterModel {
        static all = []; // Array mit allen Scooter Modellen
    constructor(name, category, img, price, description) {
        this._name = name;
        this._category = category;
        this._img = img;        
        this._price = price;
        this._description = description;
        ScooterModel.all.push(this); // Neue Scooter werden automatisch in den Array gepusht
        this._detailsButton = '<button id="button-' + ScooterModel.all.indexOf(this) + '" class="details-button">Details</button>';        
    }

    get name() {
        return this._name;
    }

    get category() {
        return this._category;
    }

    get img() {
        return this._img;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }

    get detailsButton() {
        return this._detailsButton;
    }

    showScooter() {
        var newModel = document.createElement('div');
        newModel.classList.add(this.category);
        newModel.innerHTML = this._img 
                           + '<h3>' + this._name + '</h3>' 
                           + '<p>' + this._price + '</p>'
                           + this._detailsButton;
        scooterContainer.appendChild(newModel);
    }
}

// Die verschiedenen Scootermodelle werden angelegt und in den ScooterModels.all Array gepusht


const piaggioMP3 = new ScooterModel('MP3 Exclusive 530', 'MP3','<img src="images/piaggio_mp3_exclusive_530.webp" alt="">', '$11,999', '<p>The absolute top of the range in every sense, the Piaggio MP3 530 hpe Exclusive is designed for riders seeking the most advanced three-wheeler on the market. It continues to raise the bar in terms of performance and technology, with automotive-style features such as cruise control, reverse gear, rear camera and BLIS (Blind Spot Information System). Unrivalled when it comes to both two and three wheels, this is the perfect scooter if you’re ready to ride into the future.</p>');

const piaggio1FCWActive = new ScooterModel('Piaggio 1 FCW Active', 'Piaggio1','<img src="images/piaggio_1_fcw_active_euro_5.webp" alt="">', '$4,699', '<p>The Piaggio 1 Feng Chen Wang sports a striking livery that fuses Chinese tradition with the designer’s extraordinary hallmark creativity. It effortlessly combines the major influences in her life, drawing inspiration from the spectacular landscapes of Fujian, where she was born and raised, while displaying the more modern, multiform aspects of  her London experience. The precise shade of green used on the seat upholstery and wheel rims recalls the native fauna of her homeland, while also representing health, harmony and prosperity.</p>');

const piaggio1ActiveEuro5 = new ScooterModel('Piaggio 1 Active Euro 5', 'Piaggio1', '<img src="images/piaggio_1_active_euro_5.webp" alt="">', '$4,799', '<p>With an underseat compartment large enough to house a full jet helmet, the Piaggio 1 Active is the only e-scooter in its category to offer such generous storage. Attention has also been given to the ergonomics, with the seat-footwell-handlebar triangle following the traditional proportions of a Piaggio scooter. The spacious footwell creates a comfortable riding position while passengers can rest their feet on sturdy foldaway foot pegs. Last but not leas are a handy bag hook and a USB port with a waterproof rubber cover in the leg shield back plate.</p>');

const beverly400Euro5 = new ScooterModel('Beverly 400 Euro 5','BV', '<img src="images/piaggio_beverly_400_s_euro_5.webp" alt="">', '$7,399', '<p>The BV S flaunts its sporty, gritty character, with its design lines and stylistic flourishes testament to its exuberant spirit. The fuel tank is located in the tunnel for greater power and agility, along with riding thrills more typically found in a motorcycle. <br><br>Matt graphite grey on the luggage rack, passenger foot pegs, central tunnel and wheel rims makes it clear that this is a scooter with attitude, as does the black dual-material double-stitched saddle. The BV S comes in a choice of three colours, with the elegant matt Nero Tempesta black and Argento Cometa silver and the oh-so-charismatic glossy orange of Aranco Sunset.</p>');

const liberty150BaciPeruginaEuro5 = new ScooterModel('Liberty 150 Baci Perugina Euro 5', 'Liberty', '<img src="images/piaggio_liberty_150_baci_perugina_euro_5.webp" alt="">', '$2,599', '<p>One of the world’s most beloved vehicles meets an iconic Italian symbol of love in the Piaggio Liberty Baci Perugina, a scooter designed for everyday joy, friendship and of course, adventures of the heart. This special edition model celebrates 100 years of Baci® Perugina® chocolates and the desire to create genuine, strong links. Values shared by Piaggio and Baci® Perugina®, both of which have always sought to connect people with each other in a simple, but fun and enjoyable manner. With this extra-special scooter, you will live every day with passion and the knowledge that distance is no obstacle for heartfelt emotions.</p>');

const liberty50Euro5 = new ScooterModel('Liberty 50 Euro 5', 'Liberty', '<img src="images/piaggio_liberty_50_euro_5.webp" alt="">', '$2,549', '</p>The Piaggio Liberty 50 is generally considered the entry level model in the Liberty family which also includes 150 cc version. Available also in a sportier version, the S, it has long been known and beloved for its elegance, lightness and riding ease. Powered by a single cylinder 50 cc engine which uses i-get (Italian Green Experience Technology) with a three-valve timing system  it offers impeccable performance and reliability as well as reduced fuel consumption. Scrupulous attention has also been afforded to the construction of the body and finishes to ensure maximum safety and the best possible driving experience, with the wide wheels (14” at the rear and 16” up front) delivering greater precision and manoeuvring. Last but not least there are the practical aspects such as the spacious under seat compartment which can hold a full-face helmet, the storage box nestled in the rear of the shield, and the instrument cluster which ingeniously mixes analogue and digital elements to ensure maximum visibility no matter what the light conditions.</p>'
);

const liberty50SEuro5 = new ScooterModel('Liberty 50 S Euro 5', 'Liberty','<img src="images/piaggio_liberty_50_s_euro_5.webp" alt="">', '$2,649', '<p>You might describe the Piaggio Liberty S 50 as the most intrepid member of the Liberty family with details such as the bold red stitching on the seat, wheel rims and black mirrors. Like its twin, its beating heart is the single cylinder 50 cc three-valve engine with i-get (Italian Green Experience Technology). In summary, outstanding performance, reliability and fuel economy.<br><br>Then there are the practical details such as the underseat compartment which holds a full-face helmet, the glove box in the rear shield and the instrument cluster with its mix of analogue and digital technology so as to ensure maximum visibility day and night. Let’s not forget the aesthetics: the sporty curves of the Liberty S 50 are set off to perfection by matt and gloss black detailing its wheel rims of 14” at the rear and 16” up front.<br><br>They’re not only an integral part of the look, but also ensure greater riding stability and handling.</p>');
                    
const liberty150Euro5 = new ScooterModel('Liberty 150 Euro 5', 'Liberty','<img src="images/piaggio_liberty_150_euro_5.webp" alt="">', '$3,149', '<p>For those seeking something a little more powerful than the 125 cc version, Piaggio developed Liberty 150 ABS. Whilst the look and bike itself are identical to its less powerful twin, what’s different is the fuel-injected single cylinder engine which, like the rest of the family, benefits from i-get (Italian Green Experience Technology) but delivers a punchy 9.3 kW at 7500 rpm and torque of 12.8 Nm at 6500 rpm meaning it has plenty of go in all conditions whilst offering great safety in the form of the front-wheel ABS only. On the environmental side, it also stands up to scrutiny, conforming with Euro 5 standards. On the aesthetics front, it has the same elegant look as the 125 cc and the large diameter tyres (16” in front and 14” at the rear) which are such a key element in the design and are a perfect foil to such distinctive visual features as the vertical decorative element on the front shield. Last but not least, the Liberty 150 ABS includes two lockable storage spaces, with a handy glove box in the rear of the shield and an underseat compartment large enough to hold a full-face helmet.</p>');
                
const liberty150SEuro5 = new ScooterModel('Liberty 150 S Euro 5', 'Liberty', '<img src="images/piaggio_liberty_150_s_euro_5.webp" alt="">', '$3,249', '<p>The Piaggio Liberty S 150 ABS is the big brother of the family; the most elegant, captivating and top performing sibling. It’s also the sporty brother to its twin and as with the other Liberty “S” models, it is easily recognisable by a host of special details, from its wheel rims, mirrors, luggage rack and other components all in black, to the stylish red-stitched seat. As with the other Liberty models, it’s not all about looks, but functionality is important too. There is plenty of storage with a glove box nestled in the rear of the shield, an understeat compartment large enough to hold a full-face helmet, a spacious foot board and handy bag hook. The instrument cluster combines analogue and digital technology. Last but not least, on the performance side, the Piaggio Liberty S 150 ABS is powered by an air-cooled, electronic injected, three-valve single cylinder motor which uses i-get (Italian Green Experience Technology) and complies with Euro 5 emission standards.</p>');

// Scooter werden ins DOM eingefügt

piaggioMP3.showScooter();
piaggio1FCWActive.showScooter();
piaggio1ActiveEuro5.showScooter();
beverly400Euro5.showScooter();
liberty50Euro5.showScooter();
liberty50SEuro5.showScooter();
liberty150Euro5.showScooter();
liberty150SEuro5.showScooter();
liberty150BaciPeruginaEuro5.showScooter();

// Klick auf Details Button




// const detailsButton0 = document.getElementById('button-0');
// const detailsButton1 = document.getElementById('button-1');
// const detailsButton2 = document.getElementById('button-2');
// const detailsButton3 = document.getElementById('button-3');
// const detailsButton4 = document.getElementById('button-4');
// const detailsButton5 = document.getElementById('button-5');
// const detailsButton6 = document.getElementById('button-6');
// const detailsButton7 = document.getElementById('button-7');
// const detailsButton8 = document.getElementById('button-8');


let absoluteDiv = document.getElementById('popup');


// Inhalt des Detail Popups

const popUp = (x) => {
            
            absoluteDiv.style.visibility = 'visible';
            let absoluteDivAdd = document.createElement('div');
            absoluteDivAdd.innerHTML = ScooterModel.all[x].img 
                                       + '<h2>' + ScooterModel.all[x].name + '</h2>' 
                                       + '<p class="price">' + ScooterModel.all[x].price + '</p>'
                                       + ScooterModel.all[x].description;
            absoluteDiv.appendChild(absoluteDivAdd);     
}

// detailsButton0.onclick = function () {popUp(0)};
// detailsButton1.onclick = function () {popUp(1)};
// detailsButton2.onclick = function () {popUp(2)};
// detailsButton3.onclick = function () {popUp(3)};
// detailsButton4.onclick = function () {popUp(4)};
// detailsButton5.onclick = function () {popUp(5)};
// detailsButton6.onclick = function () {popUp(6)};
// detailsButton7.onclick = function () {popUp(7)};
// detailsButton8.onclick = function () {popUp(8)};


// Category Buttons bekommen eine Variable

const catAllButton = document.getElementById('cat-all');
const catMp3Button = document.getElementById('cat-mp3');
const catLibertyButton = document.getElementById('cat-liberty');
const catBvButton = document.getElementById('cat-bv');
const catPiaggio1Button = document.getElementById('cat-piaggio-1');

// Funktion um alle Scooter anzuzeigen

const displayAllScooters = () => {
    if(scooterContainer.hasChildNodes) {
        let child = scooterContainer.children;
        for(let i = 0; i < child.length; i++) {
             child[i].style.display = 'block';
        }
    }
}

catAllButton.onclick = displayAllScooters;
    


// Funktion um alle Scooter in der Kategorie MP3 anzuzeigen

const displayMp3Scooters = () => {
    if(scooterContainer.hasChildNodes) {
        let child = scooterContainer.children;
        for(let i = 0; i < child.length; i++) {
            if (child[i].className != 'MP3') {
                child[i].style.display = 'none';
            } else {child[i].style.display = 'block';}
        }
    }
    // scooterContainer.innerHTML = '';
    // for(let i = 0; i < ScooterModel.all.length; i++) {
    //     if(ScooterModel.all[i].category == 'MP3') {
    //         scooterContainer.innerHTML += '<div>'
    //                                   + ScooterModel.all[i].img 
    //                                   + '<h3>' + ScooterModel.all[i].name + '</h3>' 
    //                                   + '<p>' + ScooterModel.all[i].price + '</p>'
    //                                   + ScooterModel.all[i].detailsButton
    //                                   + '</div>';
    //     }
    // }
}

catMp3Button.onclick = displayMp3Scooters;

//Funktion um alle Scooter in der Kategorie Liberty anzuzeigen

const displayLibertyScooters = () => {
    if(scooterContainer.hasChildNodes) {
        let child = scooterContainer.children;
        for(let i = 0; i < child.length; i++) {
            if (child[i].className != 'Liberty') {
                child[i].style.display = 'none';
            } else {child[i].style.display = 'block';}
        }
    }
}

catLibertyButton.onclick = displayLibertyScooters;

//Funktion um alle Scooter in der Kategorie BV anzuzeigen

const displayBvScooters = () => {
    if(scooterContainer.hasChildNodes) {
        let child = scooterContainer.children;
        for(let i = 0; i < child.length; i++) {
            if (child[i].className != 'BV') {
                child[i].style.display = 'none';
            } else {child[i].style.display = 'block';}
        }
    }
}

catBvButton.onclick = displayBvScooters;

//Funktion um alle Scooter in der Kategorie Piaggio1 anzuzeigen

const displayPiaggio1Scooters = () => {
    if(scooterContainer.hasChildNodes) {
        let child = scooterContainer.children;
        for(let i = 0; i < child.length; i++) {
            if (child[i].className != 'Piaggio1') {
                child[i].style.display = 'none';
            } else {child[i].style.display = 'block';}
        }
    }
}

catPiaggio1Button.onclick = displayPiaggio1Scooters;





// Details schließen

const closeDetails = () => {
    absoluteDiv.style.visibility = 'hidden';
    absoluteDiv.removeChild(absoluteDiv.lastChild);
}

let closeButton = document.getElementById('close-popup');
closeButton.onclick = closeDetails;