let hex;
const randomColour = () => {
    let colour = (Math.floor(Math.random() * 0x1000000)).toString(16);
    colour = ("000000" + colour).slice(-6);
    return '#' + colour;
}
// const randomColour = () => {
//     return `#${Math.floor(Math.random()*16777215).toString(16)}`;
// }
// const randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
// function invertHex(hex) {
//     return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
//   }
const inverted = (c) => {
    c = parseInt(c.substring(1), 16);
    c = 0xFFFFFF ^ c;
    c = ("000000" + c).slice(-6);
    return '#' + c;
}
const pallettes = document.querySelector("#newColours");

currentColours = [];

pallettes.addEventListener("click", (e) => {
    
    document.getElementById("1").style.background = randomColour();
    document.getElementById("2").style.background = randomColour();
    document.getElementById("3").style.background = randomColour();
    document.getElementById("4").style.background = randomColour();
    document.getElementById("5").style.background = randomColour();

    document.getElementById("1").innerHTML = `${document.getElementById("1").style.background}`
    document.getElementById("2").innerHTML = `${document.getElementById("2").style.background}`
    document.getElementById("3").innerHTML = `${document.getElementById("3").style.background}`
    document.getElementById("4").innerHTML = `${document.getElementById("4").style.background}`
    document.getElementById("5").innerHTML = `${document.getElementById("5").style.background}`

    currentColours = [document.getElementById("1").style.background, document.getElementById("2").style.background, document.getElementById("3").style.background, document.getElementById("4").style.background, document.getElementById("5").style.background]

    document.querySelectorAll('.results').forEach((item, index) => {
        item.textContent = `Colour ${index+1}:${currentColours[index].toUpperCase()}`;
        item.style.background = currentColours[index];
        item.style.color = inverted(currentColours[index])
        console.log(currentColours[index])
    })

    console.table(currentColours)
    //document.getElementById("colour1").textContent = currentColours[0].toUpperCase();
    if(document.getElementById("light").checked){
        document.querySelector("body").classList.remove("dark");
    }else{
        document.querySelector("body").classList.add("dark");
    }
})


document.querySelectorAll('.strip').forEach((item, index) => {
    item.addEventListener("click", e => {
        item.style.background = randomColour();
        item.innerHTML = `${item.style.background}`
        currentColours[index] = item.style.background;
        console.table(currentColours)
        document.querySelectorAll('.results').forEach((item, index) => {
            item.textContent = `Colour ${index+1}:${currentColours[index].toUpperCase()}`;
            item.style.background = currentColours[index];
            item.style.color = inverted(currentColours[index])
        })
    })
})


