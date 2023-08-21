document.querySelector(".BtnRetour").addEventListener("click", ()=>{
    document.querySelector(".ConcepteurAvatar").classList.add("none");
    document.querySelector("body").classList.remove("body");
})
document.querySelector(".TexteAvBtnModifier").addEventListener("click", ()=>{
    document.querySelector("body").classList.add("body");
    document.querySelector(".ConcepteurAvatar").classList.remove("none");
})


// document.querySelector("body").classList.add("body");
// document.querySelector(".ConcepteurAvatar").classList.remove("none");
