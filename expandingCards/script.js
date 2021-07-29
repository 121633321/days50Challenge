const panels = document.querySelectorAll('.panel');
panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        removePanelsClass();
        panel.classList.add("active");
    })
})
function removePanelsClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}