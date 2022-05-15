let position = 0;
const visibleSlide = 1;
const sliderBody = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider_track');
const sliderItem = document.querySelectorAll('.slider_item');
const bottomItem = document.querySelectorAll('.button_item');   
const textBody = document.querySelector('.slider_content');
const sliderText = document.querySelector('.slider_text')
const visibletext = document.querySelector('.text_body');
const text = document.querySelectorAll('.text');

let itemWidth = 0;
let textWidth = 0;

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


if(window.matchMedia("(min-width: 768px)").matches){
    GenerateSlider();
}
else if(window.matchMedia("(max-width: 768px)").matches){
    sliderBody.style.width = '300px';
    textBody.style.cssText =`flex-direction: column; width:300px;`
    sliderText.style.cssText = `margin-left:auto; margin-right: auto`
    GenerateSlider();
}



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
        textBody.style.cssText =`flex-direction: row; width: 600px;`
        sliderText.style.cssText = `margin:0; padding: 0;`
        GenerateSlider();
        ItemWithGeneration(lastIndex);

    }
    else if(window.matchMedia("(max-width: 768px)").matches){
        sliderBody.style.width = '300px';
        //textBody.style.width = '400px';
        textBody.style.cssText =`flex-direction: column; width:300px;`
        sliderText.style.cssText = `margin-left:auto; margin-right: auto`
        GenerateSlider();
        ItemWithGeneration(lastIndex);
    }
})

  