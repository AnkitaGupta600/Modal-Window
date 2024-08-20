'user strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.show-modal');
const openModal=function(){
    console.log('Button Clicked');
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden');
   }
const closemodal=function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden');}
for(let i=0;i<btnOpenModal.length;i++)
   btnOpenModal[i].addEventListener('click',openModal);
   btnCloseModal.addEventListener('click',closemodal);
   overlay.addEventListener('click',closemodal);
document.addEventListener('keydown',function(event){
    console.log(event.key);
    if(event.key=='Escape'&& !modal.classList.contains('hidden')){
       closemodal();
    }
})


