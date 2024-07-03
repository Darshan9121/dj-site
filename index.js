function myFunction() {
    myVar = setTimeout(showPage, 5000);
    // alert("function call");
  }
  
  function showPage() {
    document.querySelector(".loading").style.display= "none";
    
    let body =document.querySelector(".container");
    body.style.display="block";


  }



function onover(){
  
  let logo = document.querySelector('.b_logo');
  logo.style.animation=" fade-out 4s ease-in-out 1";
  logo.style.display="none";
  let target= document.querySelector(".nav");
  target.style.animation="detail 2s";
  target.style.display="block";
  // target.style.position="relative";
  // target.style.left="650px";
  
  // target.style.transform="translateX(-40px)";
  


}

function photo(){

  let target = document.querySelector("#dj");
  target.setAttribute("animation","photo 15s 1 alternate");
  target.setAttribute("src","ASSETS/dev.png");

  // target.style.animation="photo 5s ease-in-out 1 alternate";
  target.setAttribute("object-position","top right");
  // target.style.animation="photo 5s 1 inverse";
}

document.addEventListener("DOMContentLoaded",reveal());

function reveal() {

  let observr = new IntersectionObserver((entry)=>{
    entry.forEach((element) => {
      console.log(entry);
      if(element.isIntersecting){
          element.target.classList.add('active');
          element.target.classList.add('reveal');
        }
        else{
          
        element.target.classList.add('reveal');
        element.target.classList.remove('active');
      }
    });
  });


  const hideelement = document.querySelectorAll(".reveal");
  hideelement.forEach((el)=>observr.observe(el));
}


