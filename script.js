let hex;
const randomColour = () => {
    let colour = (Math.floor(Math.random() * 0x1000000)).toString(16);
    colour = ("000000" + colour).slice(-6);
    return '#' + colour;
}
const inverted = (c) => {
    c = parseInt(c.substring(1), 16);
    c = 0xFFFFFF ^ c;
    c = ("000000" + c).slice(-6);
    return '#' + c;
}
const pallettes = document.querySelector("#newColours");

currentColours = [];

// Generate random colours and return them
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

// Change individual colour strips
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

// Screenshot colours


function cheese(){
    let photo =  document.getElementById("colours");
    html2canvas(photo).then( 
        function (canvas) { 
            document 
            .getElementById('savedColours') 
            .appendChild(canvas); 
        }) 
}

document.getElementById('save').addEventListener('click', (e) => {
    document.getElementById("savedColours").innerHTML = '';
    download();
})

const download = () => {
    html2canvas(document.querySelector('#colours')).then(canvas => {
        document.getElementById("savedColours").appendChild(canvas);
     });
}