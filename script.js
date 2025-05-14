function changeText() {
    document.getElementById("text").textContent = "🎉 The text has been changed!";
}

function changeColor() {
    document.body.style.backgroundColor = "#cdeffd"; // light blue
}

function addParagraph() {
    const newPara = document.createElement("p");
    newPara.textContent = "This is a new paragraph added to the page!";
    newPara.id = "new-para"; // add ID to target later
    document.getElementById("content-box").appendChild(newPara);
}

function removeParagraph() {
    const para = document.getElementById("new-para");
    if (para) {
        para.remove();
    }
}
