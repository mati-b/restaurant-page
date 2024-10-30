export function loadContact() {
    const content = document.querySelector('#content');
    const elements = [];

    const h1 = document.createElement('h1');
    h1.innerText = 'About us';
    elements.push(h1);

    const p = document.createElement('p');
    p.innerText = "Experience the authentic taste of Italy with us, where our passion for traditional Italian cuisine and genuine hospitality come together to create unforgettable dining moments."
    elements.push(p);

    elements.forEach((element) => content.appendChild(element));
}