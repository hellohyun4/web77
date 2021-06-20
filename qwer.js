const hand = document.getElementById('hand');
const origin = document.getElementsByClassName("origin")[0];
const handmade = document.getElementById('handmade');
const back = document.getElementsByTagName("body")[0];

let start=true;

hand.addEventListener('click', function(){
    start = !start;
    if(start){
        origin.style.display ='block';
        handmade.style.display='none';
        back.style.backgroundColor='black';
    } else{
        origin.style.display='none';
        handmade.style.display='block';
        back.style.backgroundColor='black';

    }

})