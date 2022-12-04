let coll = document.getElementsByClassName("cv-btn");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


let btn = document.getElementsByClassName("cv-btn")
// btn.innerText = "View CV"
document.body.appendChild(btn)
btn.addEventListener("click", viewCV)


function viewCV(src= "DS_CV.png",width = 800, height = 600, alt= "CV") {
  // let btn = document.getElementById("cv-btn")
  btn.innerText = "View CV"
  btn.src = src;
  btn.width = width;
  btn.height = height;
  btn.alt = alt;
  document.body.appendChild(btn)
}

viewCV()