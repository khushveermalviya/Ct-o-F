// var cel= document.getElementById("cel");
// var fah= document.getElementById("fah");

// cel.addEventListener('input', function(){
// let c= this.value;
// let f =(c*9/5)+32;
// if(!Number.isInteger(f)){
// f=f.toFixed(4);
// }
// fah.value=f;
// });
// fah.addEventListener('input', function(){
// let f =this.value;
// let c=(f-32)*5/9;
// if(!Number.isInteger(c)){
// c=c.toFixed(4);
// }
// cel.value=c;
// });
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  