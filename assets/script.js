const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Index pour suivre l'image actuelle
let currentIndex = 0;

// Sélectionner les éléments HTML pour l'image, le texte, et les points
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

// Fonction pour mettre à jour l'image, le texte, et les points
function updateSlide(index) {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;

    // Met à jour les points pour montrer le point actif
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Fonction pour aller à la diapositive suivante
function goToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
}

// Fonction pour aller à la diapositive précédente
function goToPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
}

// Sélectionner toutes les flèches avec la classe 'arrow'
const arrows = document.querySelectorAll('.arrow');

// Ajouter un écouteur d'événement 'click' à chaque flèche
arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('arrow_left')) {
            goToPreviousSlide();
            console.log('Flèche gauche cliquée');
        } else if (arrow.classList.contains('arrow_right')) {
            goToNextSlide();
            console.log('Flèche droite cliquée');
        }
    });
});

// Ajouter un écouteur d'événement à chaque point pour naviguer vers la diapositive correspondante
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(currentIndex);
    });
});

// Initialiser le diaporama avec la première slide
updateSlide(currentIndex);