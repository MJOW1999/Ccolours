//const randomColour = `#${Math.floor(Math.random()*16777215).toString(16)}`;
const randomColour = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}
const randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
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

    document.getElementById("1").style.color = invertHex(document.getElementById("1").style.background)

    currentColours = [document.getElementById("1").style.background, document.getElementById("2").style.background, document.getElementById("3").style.background, document.getElementById("4").style.background, document.getElementById("5").style.background]
    console.table(currentColours)
    document.getElementById("colour1").textContent = currentColours[0].toUpperCase();
})
