'use strict'

let open = false;

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = true;
    toggleMenu();
})

document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;

    toggleMenu();
});

function toggleMenu() {
    
    const menuSize = getComputedStyle(document.documentElement).getPropertyValue('--menu-size');
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return;
    } else {
        document.querySelector('#menu').style.marginLeft = `-${menuSize}`;
    }
}

let dropdownMenu = false;

document.querySelector('.dropdown-container').addEventListener('click', e => {
    dropdownMenu = !dropdownMenu;
    toggleDropdownMenu();
});



function toggleDropdownMenu() {
    
    
    if(!dropdownMenu) {
        document.querySelector('#menuDropDown').style.display = 'none';
        
    } else {
        document.querySelector('#menuDropDown').style.display = 'flex';
        
    }
}

const iconElement = document.createElement('i');
iconElement.classList.add('fa-shap', 'fa-solid', 'fa-chevron-down');

const dropdownContainer = document.querySelector('.dropdown-container');

dropdownContainer.appendChild(iconElement);

if(dropdownMenu === true) {
    iconElement.classList.remove('fa-shap', 'fa-solid', 'fa-chevron-down');
    iconElement.classList.add('fa-shap', 'fa-solid', 'fa-chevron-up');
} else {
    iconElement.classList.remove('fa-shap', 'fa-solid', 'fa-chevron-up');
}

