//loops of container
const container = document.querySelector(".container");
const button = document.querySelector("button");


button.addEventListener("click", () => {
    let x = prompt("How many boxes u want (1,100) Enter the value ");
    
    if (x >= 1 && x <= 100){
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${x}, 100px)`;
    container.style.gridTemplateRows = `repeat(${x}, 100px)`;
        for (let i = 0; i<x*x ; i++) {
            let div = document.createElement("div");
            div.classList.add("item");
            div.addEventListener("mouseover",() =>{
            div.style.backgroundColor = "blue";
        });
    container.appendChild(div);
}
}

else{
    document.getElementById("demo").innerHTML = "Rejected!!";
}
});
