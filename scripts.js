const productContainers = [...document.querySelector('.product-container')];
const nxtBtn = [...document.querySelector('.nxt-btn')];
const preBtn = [...document.querySelector('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {})
        item.scrollLeft += containerWidth;
})


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})