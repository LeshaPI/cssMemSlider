let position = 0;
const visibleSlide = 1;
const sliderBody = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider_track');
const sliderItem = document.querySelectorAll('.slider_item');
const bottomItem = document.querySelectorAll('.button_item');
const textBody = document.querySelector('.slider_content');
const visibletext = document.querySelector('.text_body');
const text = document.querySelectorAll('.text');

let itemWidth = sliderBody.clientWidth / visibleSlide;
let textWidth = textBody.clientWidth / visibleSlide;

function ItemWithGeneration(index){
    sliderTrack.style.left = `-${itemWidth * index}px`;
    visibletext.style.left = `-${textWidth * index}px`;
}

function GenerateSlider(){
    itemWidth = sliderBody.clientWidth / visibleSlide;
    textWidth = textBody.clientWidth / visibleSlide;

    sliderItem.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    })
    
    text.forEach((item) =>{
        item.style.minWidth = `${textWidth}px`;
    })
}

GenerateSlider(sliderItem,text)


let lastIndex = 0;


bottomItem.forEach((it,index) => {
    bottomItem[index].addEventListener('click',() =>{
       lastIndex = index; 
       bottomItem[index].classList.add('animation'); 
       setTimeout(() => {bottomItem[index].classList.remove('animation')},300);

       bottomItem.forEach((item) => {
           item.classList.remove('active');
       })

       bottomItem[index].classList.add('active');
       ItemWithGeneration(lastIndex);
    })
})



window.addEventListener('resize',() => {

    if(window.matchMedia("(min-width: 768px)").matches) {
        sliderBody.style.width = '600px';
        textBody.style.width = '600px';
        GenerateSlider();
        ItemWithGeneration(lastIndex);
    }
    else if(window.matchMedia("(max-width: 768px)")){
        sliderBody.style.width = '400px';
        textBody.style.width = '400px';
        GenerateSlider();
        ItemWithGeneration(lastIndex);
    }
})

  