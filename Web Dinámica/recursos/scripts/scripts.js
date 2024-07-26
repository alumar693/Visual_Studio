const options = document.querySelectorAll('.white, .grey, .black');

options.forEach(option => {
    option.addEventListener('click', ()=>{
        const productImage = document.querySelector('.product-image');
        const dataValue = option.getAttribute(`data-value`);
        const routeImage = "../recursos/public/img/evoque-"
        productImage.style.backgroundImage = `url(${routeImage}${dataValue}.png)`;
        const tag = document.querySelector('.tag');
        tag.style.background = dataValue;
        tag.style.color = dataValue == 'white' ? 'black' : 'white';        
    });
});

const button = document.querySelector("button");
button.addEventListener('click', ()=>{
    const toDelete = document.querySelector('.product-description');
    toDelete.innerHTML = '<p class = "product-title">Enhorabuena, has comprado un Range Rover Evoque!!!</p>';
});