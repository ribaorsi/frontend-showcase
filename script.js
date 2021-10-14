function pageLoaded() {
    console.log("Az oldal betöltődött.");

    document.getElementById("root").classList.add("loaded");

    function rootClicked(){
        console.log("A root id-jű elemre kattintottunk");
    }

    document.getElementById("root").addEventListener("click", rootClicked);  
}


window.addEventListener("load", pageLoaded);
