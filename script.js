function Introduction() {
    window.addEventListener("keydown", () => {
        console.log("Proceed")
        goToScene("Scene1")
    })
}


function goToScene(scene) {
    window.location.href = scene + ".html"; 
}
