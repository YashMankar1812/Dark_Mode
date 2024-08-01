document.getElementById("toggleSwitch").addEventListener("change", () => {
    const hTag = document.querySelector("h1");
    const bodyTag = document.body;
    const circle = document.getElementById("circle");


    const isToggled = bodyTag.classList.toggle("bck-color-black");
    hTag.classList.toggle("color-white", isToggled);
    circle.classList.toggle("dark-mode", isToggled);
    

    
});


