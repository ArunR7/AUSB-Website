const btn=document.getElementById('hamburger');
const nav=document.getElementById('hamburger__list');

 
  btn.addEventListener('click',()=>{

        btn.classList.toggle("active");
        nav.classList.toggle('active');
  });