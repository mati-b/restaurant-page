import loadHome from "./home.js";
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";



function initialLoad() {
    
    const content = document.querySelector('#content');
    let activePage = 'Home';
    console.log(activePage);

    loadHome();

    const homeButton = document.querySelector('#home');
    homeButton?.addEventListener("click", () => {
        if (activePage === 'home') {
            return;
        }
        content.innerHTML = '';
        activePage = 'home';
        loadHome();
    });

    const menuButton = document.querySelector('#menu');
    menuButton?.addEventListener('click', () => {
        if (activePage === 'menu') {
            return;
        }
        content.innerHTML = '';
        activePage = 'menu';
        loadMenu();

    })
    
    const contactUsBtn = document.querySelector('#about');
    contactUsBtn?.addEventListener('click', () => {
        if (activePage === 'about') {
            return;
        }
        content.innerHTML = '';
        activePage = 'about';
        loadContact();
        
    });
}

export default initialLoad;