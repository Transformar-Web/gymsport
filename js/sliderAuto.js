const sliders = document.querySelectorAll('.containerSlide__itemSlide');
console.log(sliders);

let contador = 0;
// sliders[1].classList.add("active-slide");

function Auto(){
    sliders[contador].classList.remove("active-slide")
    if(contador != sliders.length -1){
        contador++
    }else{
        contador = 0
    }
    sliders[contador].classList.add("active-slide")
    setTimeout(Auto,7000);
}

window.onload = Auto;