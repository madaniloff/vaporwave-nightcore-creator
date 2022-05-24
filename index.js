  
function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
}

document.getElementById("upload").addEventListener("change", handleFiles, false);

function outputUpdate(speed) {
    document.querySelector('#playbackrate').value = speed;    
}

function outputSpeed() { 
    myFile.playbackRate = document.querySelector('#playbackrate').value;
}

function pitchUpdate() {

}

function outputPitch() {

}

myFile = document.getElementById("audio")

function helpClick(event) {
    
    var helpModal = document.querySelector("#help-modal")
    helpModal.classList.toggle('hidden')
}

var helpButton = document.getElementsByClassName("help-button")
helpButton[0].addEventListener("click", helpClick)
var closeButton = document.getElementsByClassName("close-modal")
closeButton[0].addEventListener("click", helpClick)

