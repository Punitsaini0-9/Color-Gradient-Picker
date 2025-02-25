let btn = document.getElementById("btn");
let live = document.getElementById("live");
let input1 = document.getElementById("input-1");
let input2 = document.getElementById("input-2");
let code = document.querySelector(".value")

const hex_1 = () => input1.value;
const hex_2 = () => input2.value;

// console.log(hex_2());


const applyGradient = () => {
    let color1 = hex_1();
    let color2 = hex_2();
    document.body.style.background = `linear-gradient(${color1},${color2})`;
}

const addCode = () => {
    // Remove existing <p> if it exists
    let existingP = code.querySelector("p");
    if (existingP) {
        existingP.remove();
    }

    let p = document.createElement("p")
    p.textContent = `background-image: linear-gradient(${hex_1()}, ${hex_2()});`;
    // console.log(p);
    code.append(p);
}


const clickBtn = () => {
    addCode();
    // generateRandomHex()
};

btn.addEventListener("click", clickBtn);
live.addEventListener("click", applyGradient);


code.addEventListener(('click'),() => {
    navigator.clipboard.writeText(code.innerText)
    alert(`The code was Copy\n ${code.innerText}`);
})
