//Shorten the desciprion text using the DOM... temporarily
let cosmereDescription = document.querySelectorAll(".cosmere-description");
for(let i = 0; i < cosmereDescription.length; i++){
    let truncatedText = cosmereDescription[i].innerHTML.substring(0, 140);
    cosmereDescription[i].innerHTML = truncatedText + "...";
}
