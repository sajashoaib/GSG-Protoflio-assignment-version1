 const FixedButton =document.querySelector(".fixed-up-btn");

//  show the button when scroll down 300 from top
window.onscroll=()=>{
    if(document.body.scrollTop>300 || document.documentElement.scrollTop >300){
        FixedButton.style.display="block";
    }
    else{
        FixedButton.style.display="none";
  
    }
}

// when click on button scroll to top 
FixedButton.addEventListener('click',()=>{
    window.scrollTo({top:0, behavior:"smooth"})
})