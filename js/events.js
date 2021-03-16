// programacion del menu
const btnMenu = document.getElementById('btnMenu');
const navbar = document.querySelector(".navbar__sectionLinks");
btnMenu.addEventListener("click", function(){
   btnMenu.classList.toggle("is-active");
   navbar.classList.toggle("collapsar");
});


// codigo del modal
const btnModal = document.querySelectorAll('#btnPrincipal1');
const modalPrincipal = document.querySelector('.modalPrincipal');
const textModal = document.querySelector('.modalPrincipal__article');
btnModal.forEach(function(btns, index){
    btns.addEventListener('click', (e)=>{
       modalPrincipal.classList.add('modalPrincipal--active');    
       switch(index){
          case 0 : 
            textModal.innerHTML = //html 
            `
              <p>Realizar de forma regular y sistemática una actividad física ha demostrado ser una práctica muy beneficiosa en la prevención, desarrollo y rehabilitación de la salud, a la vez que ayuda al carácter, la disciplina y a la toma de decisiones en la vida cotidiana.
              El ejercicio físico, ya sea de corta o larga duración, contribuye a establecer un bienestar mental, mejorando la autonomía de la persona, la memoria, rapidez de ideas, etcétera, y promoviendo sensaciones como el optimismo o la euforia, al tiempo que se mejora la autoestima de las personas, lo que produce beneficios en diferentes enfermedades como la osteoporosis, la hipertensión o las crisis diabéticas.
              <br><br>
              El ejercicio regular es bueno para la salud y puede ayudarle a bajar de peso. Pero si usted es como muchos estadounidenses, pasa mucho tiempo ocupado, tiene un trabajo sedentario y no se ejercita habitualmente. La buena noticia es que nunca es demasiado tarde para empezar. Usted puede comenzar de a poco y encontrar maneras de hacer más actividad física en su vida. Para obtener el mayor beneficio, usted debe tratar de realizar la cantidad recomendada de ejercicio para su edad. Si usted lo logra, se sentirá mejor, ayudará a prevenir o controlar muchas enfermedades y puede incluso vivir más tiempo.
              </p>
            `;
          break;
          case 1 :
           textModal.innerHTML = //html 
           `
           <p>
               Los gimnasios de la actualidad disponen del mejor equipo necesario para la realización de rutinas de ejercicio, nuestro gimnasio cuenta con planes de suscripciones donde los usuarios podrán elegir el tipo de modalidad y beneficios que más se adecuen a su presupuesto. Sabemos lo importante que es llevar una vida saludable, por consiguiente formar parte de nuestro gimnasio te traerá múltiples beneficios en tu vida.
               <br><br>
               Nuestro gimnasio se pone a disposición de las personas que quieren un cambio en su vida creando habitos saludables a través de multiples rutinas de ejercicio, GYMSPORT disponede modernas instalaciones para nuestros clientes. 
               <br><br>
                Esto se debe a que al practicar ejercicio se liberen edorfinas que nos hacen sentir bien. Una de las mejores formas de combatir el estrés, es hacer ejercicio periódicamente. De esta manera se eliminan las toxinas que producen el estrés y te ayudará a relajarte y a pensar las cosas con más claridad.
            </p>
           `
          break;
       }
    })
})

// close modal
const closeModal = document.querySelector('.modalPrincipal__close');
closeModal.onclick = function(){
   modalPrincipal.classList.remove('modalPrincipal--active');
}


// modal contact
const btnContact = document.querySelector(".containerDescuento__btn");
const modalContact = document.querySelector(".modalContact");
btnContact.addEventListener("click", ()=>{
     modalContact.classList.add("modalContact-active")
});

// close modal contact
const closeContact = document.querySelector(".containerModal__cancel");
closeContact.addEventListener("click", ()=> {
      modalContact.classList.remove("modalContact-active")
})


// sweet alerts 
const btnFoo = document.querySelector(".sectionFooter__btn");
const inputFooter = document.querySelector(".sectionFooter__input").value;

let emailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const formSus = document.querySelector("#formSuscrip");
// formSus.addEventListener("submit", (e)=>{
//    e.preventDefault();
   
//    if(emailReg.test(inputFooter)){
//       alert("Valido")
//    }else{
//       alert("invalido")
//    }

// });

