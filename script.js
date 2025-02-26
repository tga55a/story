

let desc = document.getElementById("story")

if (desc) {
    Typewrite(desc.innerHTML, desc)
}

function Typewrite(message, element) {
    console.log("BRUH")
    let i = 0
    element.innerHTML = ""
    function type() {
        if (i < message.length) {
            setTimeout(type, 50);
            element.innerHTML= element.innerHTML + message.charAt(i)
            i++
        }
    }
    type()
}


function goToScene(scene) {
    console.log("SCENE")
    window.location.href = scene + ".html"; 


    let desc = document.getElementById("story")
    desc.innerHTML = "ok bro"
    // Typewrite(desc.innerHTML, desc)
}
