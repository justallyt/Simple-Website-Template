const hambugerBtn = document.querySelector(".navTrigger");
const navBar = document.querySelector("nav");

hambugerBtn.addEventListener("click", ()=>{
      hambugerBtn.classList.toggle("active");
      navBar.classList.toggle("show");
});

//shifting displays implementation
const shiftBtns = document.querySelectorAll('.shift-btns ul li');
const shiftContainers = document.querySelectorAll(".work-description");

function showActive(index){
   shiftBtns.forEach((item)=>{
         item.classList.remove("active");
   });
   shiftBtns[index].classList.add("active");

   shiftContainers.forEach((tab)=>{
        tab.style.display = "none";
   });
   shiftContainers[index].style.display = "grid";
}

showActive(0);

for (let i = 0; i < shiftBtns.length; i++){
      shiftBtns[i].addEventListener("click", ()=>{
            showActive(i);
      });
}