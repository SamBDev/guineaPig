document.getElementById('add-color').addEventListener("click", function(){
    document.getElementById("guinea-pig").classList.toggle("color");
})
document.getElementById('make-large').addEventListener("click", function(){
    document.getElementById("guinea-pig").classList.toggle("moreBoulder");
})
document.getElementById('add-border').addEventListener("click", function(){
    document.getElementById("guinea-pig").classList.toggle("bordered");
})
document.getElementById('add-rounding').addEventListener("click", function(){
    document.getElementById("guinea-pig").classList.toggle("roundedBorder");
})

let sections = document.getElementsByClassName("article-section");
for (var i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function(){
        document.getElementById("output-target").innerHTML = `You clicked on the ${event.target.innerHTML} section`;
    })
}

document.getElementById("page-title").addEventListener("mouseover", function(){
    document.getElementById("output-target").innerHTML = "You moved your mouse over the header";
})

document.getElementById("page-title").addEventListener("mouseout", function(){
    document.getElementById("output-target").innerHTML = "You left me!!";
})

document.getElementById("keypress-input").addEventListener("keyup", function(){
    document.getElementById("output-target").innerHTML = document.getElementById("keypress-input").value;
})

