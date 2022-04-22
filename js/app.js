// header scrolling

function offsetPosition(element) {
    var offsetLeft = 0, offsetTop = 0;
    do {
        offsetLeft += element.offsetLeft;
        offsetTop  += element.offsetTop;
    } while (element = element.offsetParent);
    return offsetTop;
}

let scrollBtn = document.querySelectorAll('.scrollbtn');
scrollBtn.forEach(el => {
    let elem = el;
    el.addEventListener('click', function(){
        let data = elem.getAttribute('data-b');
        let block = document.querySelector(data);
        let offset = offsetPosition(block);
        window.scrollTo(offset, offset);
        console.log(offset)
    })
});

//questions

let questBtn = document.querySelectorAll('.quest__btn');

questBtn.forEach(element => {
    let el = element;
    el.addEventListener('click', function() {
        el.classList.toggle('active');
        let qId = el.getAttribute('data-q');
        let qBlock = document.querySelectorAll(qId);
        qBlock.forEach(element => {
            element.classList.toggle('active');
        });
        console.log(qBlock);
    })
});

//mobile menu

let mobbtn = document.querySelector('.line');
let menu = document.querySelector('.menu');

mobbtn.addEventListener('click', function(){
    mobbtn.classList.toggle('active')
    menu.classList.toggle('active');
})
let mobbtnb = document.querySelectorAll('.lineb');
mobbtnb.forEach(element => {
    element.addEventListener('click', function(){
        mobbtn.classList.toggle('active')
        menu.classList.toggle('active');
    })
});