function ativarMenuResponsivo() {

    const iconMenu = document.querySelector('.iconMenu')
    iconMenu.addEventListener("click", () => {
        const menu = document.querySelector('nav > div');
        const arrayIconMenu = ["./images/icon-hamburger.svg", "./images/icon-close.svg"];
        if (iconMenu.className === 'iconMenu on') {
            iconMenu.src = `${arrayIconMenu[1]}`;
            iconMenu.className = 'iconMenu off';
            menu.className = 'menuActive'
        } else {
            iconMenu.src = `${arrayIconMenu[0]}`;
            iconMenu.className = 'iconMenu on';
            menu.className = 'menuNone'
        }
    });  
}

ativarMenuResponsivo();

const category = document.querySelector('.category');

function ativar1() {
    const item = document.querySelector('.one'); 
    if (item.className === 'itemNone one') {
        item.className = 'item one'
    } else {
        item.className = 'itemNone one'
    }
}
function ativar2() {
    const item = document.querySelector('.two'); 
    if (item.className === 'itemNone two') {
        item.className = 'item two'
    } else {
        item.className = 'itemNone two'
    }
}
function ativar3() {
    const item = document.querySelector('.three'); 
    if (item.className === 'itemNone three') {
        item.className = 'item three'
    } else {
        item.className = 'itemNone three'
    }
}

