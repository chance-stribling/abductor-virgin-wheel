let count = 0;
const countHeader = document.getElementById("count");
countHeader.innerText = count;

let total = 0;
const totalHeader = document.getElementById("total");
totalHeader.innerText = total;

// locate html element
const countAddBtn = document.getElementById("add");
countAddBtn.addEventListener("click", ()=>{
    console.log("add button")
    count++;
    total = total + 0.25;
    totalHeader.innerText = total;
    countHeader.innerText = count;
});

const countSubBtn = document.getElementById("sub");
countSubBtn.addEventListener("click", ()=>{
    console.log("subtract button");
    count--;
    total = total - 0.25;
    totalHeader.innerText = total;
    countHeader.innerText = count;
});