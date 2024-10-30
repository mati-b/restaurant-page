

const loadHome = () => {
    const content = document.querySelector("#content");
    const elements = [];


    const h1 = document.createElement('h1');
    h1.innerText = 'Best Italian food in Argentina';
    elements.push(h1);
    

    const img = document.createElement('img');
    img.src = 'https://imgs.search.brave.com/7nB1Lux-sy4rc3k8yzfJwEFpnjZuemJlL8PosMspHWo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLmdsYW5hY2lv/bi5jb20vcmVzaXpl/ci92Mi9lbC1jaGVm/LWRlbC1lbWJhamFk/b3ItZGUtaXRhbGlh/LW1hcmlvLXNjaW9s/bGEtZW4tUEMyNlJJ/TUw2WkI1M0w0TUU0/VkYyTEFJQVEuanBn/P2F1dGg9ZTVhOTY2/MGZmMjNmYTFjMDFj/ODJlMjYxMDIxNjI0/Yzc3ZWEzODFjZjE2/Yzc1NTAxYzAwNjU0/ODMzZDZhMDViOSZ3/aWR0aD00MjAmaGVp/Z2h0PTI4MCZxdWFs/aXR5PTcwJnNtYXJ0/PXRydWU';
    img.classList = 'imagen-chef';
    elements.push(img);


    const p = document.createElement('p');
    p.innerText = 'Made with passion since 1995'
    elements.push(p);

    elements.forEach((element) => content.appendChild(element));
}

export default loadHome;