console.log("Hyperiot Clothing Website Loaded");

function showProducts(){

    document.querySelector(".hero").style.display = "none";

    document.querySelector(".products").classList.add("show");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}