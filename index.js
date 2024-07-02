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
 let target= document.querySelector(".nav");
target.style.display="block";
target.style.transition="all 2s";


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


