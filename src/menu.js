export function loadMenu() {
    const content = document.querySelector('#content');
    const elements = [];

    const h1 = document.createElement('h1');
    h1.innerText = "Olive's Menu";
    elements.push(h1);



    elements.forEach((element) => content.appendChild(element));


    const menuList = document.createElement('div');
    menuList.classList = 'menu-list';
    content.appendChild(menuList);

    //....

    const food1 = document.createElement('div');
    food1.classList = 'item';

    const lasagna = document.createElement('img');
    lasagna.src = 'https://www.allrecipes.com/thmb/9tYYd-l-_XivMJYaova22ZJ75IE=/800x533/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/246787-italian-sausage-stuffed-shells-DDMFS-4x3-1-11141c0ba9c84e7b9f593f8f907f1fcd.jpg';
    lasagna.style.width = '15vh';
    lasagna.style.height = '15vh';
    food1.appendChild(lasagna);
    menuList.appendChild(food1);

    const priceLasagna = document.createElement('p')
    priceLasagna.innerText = 'Lasagna: $6,50';
    elements.push(priceLasagna);
    food1.appendChild(priceLasagna)


    //....

    const food2 = document.createElement('div');
    food2.classList = 'item';

    const pasta = document.createElement('img');
    pasta.src = 'https://www.allrecipes.com/thmb/b6Chz4OnPM_uNDlNe6oGCV8qZCo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-130358-worlds-best-pasta-sauce-ddmfs-4x3-fddb370d6d7c469684dc87a180e6e9c3.jpg';
    pasta.style.width = '15vh';
    pasta.style.height = '15vh';
    food2.appendChild(pasta);
    menuList.appendChild(food2);

    const pricePasta = document.createElement('p')
    pricePasta.innerText = 'Pasta: $4,50';
    elements.push(pricePasta);
    food2.appendChild(pricePasta)

    //....

    const food3 = document.createElement('div');
    food3.classList = 'item';
    const pizza = document.createElement('img');
    pizza.src = 'https://www.allrecipes.com/thmb/8cLxmzYdeMpvdlSnuoPYy1xwZGA=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/70801_BrickOvenPizzaBrooklynStyle_ddmfs_3x4_3852-2ef5d5e09aa6401d8041dc0a32c8aa27.jpg';
    pizza.style.width = '15vh';
    pizza.style.height = '15vh';
    food3.appendChild(pizza);
    menuList.appendChild(food3);

    const pricePizza = document.createElement('p')
    pricePizza.innerText = 'Piza: $2,50';
    elements.push(pricePizza);
    food3.appendChild(pricePizza)



}