const pressButton= document.querySelector('.visible');
const OnPress = document.querySelector(".collapsible__action--hidden");
const text = document.querySelector('.collapsible__content');
const button = document.querySelector('.collapsible__button');

button.addEventListener('click', () => {
   
text.animate([
    {opacity: 0},
    {opacity: 1}
],{
    duration:9000,
    iterations: Infinity,
    direction: "alternate"}
)
})


  









