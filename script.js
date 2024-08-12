const para = document.getElementById("status");
const body = document.getElementsByTagName("body")[0];

function changeText(params) {
    const newH = document.createElement("h1");
    newH.id = "status";
    newH.innerText = "Entered Metaverse";
    para.replaceWith(newH);
}