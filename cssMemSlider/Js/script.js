let position = 0;
const visibleSlide = 1;
const sliderBody = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider_track');
const sliderItem = document.querySelectorAll('.slider_item');
const bottomItem = document.querySelectorAll('.button_item');
const textBody = document.querySelector('.slider_text');
const visibletext = document.querySelector('.text_body');
const text = document.querySelectorAll('.text');

const itemWidth = sliderBody.clientWidth / visibleSlide;
const textWidth = textBody.clientWidth / visibleSlide;

sliderItem.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
})

text.forEach((item) =>{
    item.style.minWidth = `${textWidth}px`;
})

bottomItem.forEach((it,index) => {
    bottomItem[index].addEventListener('click',() =>{

       bottomItem[index].classList.add('animation'); 
       setTimeout(() => {bottomItem[index].classList.remove('animation')},300);

       bottomItem.forEach((item) => {
           item.classList.remove('active');
       })

       bottomItem[index].classList.add('active');
       sliderTrack.style.left = `-${itemWidth * index}px`;
       visibletext.style.left = `-${textWidth*index}px`;
    })
})


