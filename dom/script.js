let b = document.getElementById("magicButton");
b.addEventListener("click", function() {
    document.getElementById("heading").innerText = "Magic Happened!";
    document.body.style.backgroundColor = "lightblue";
});

let p = document.getElementById("hoverParagraph");
p.addEventListener("mouseover", function() {
    p.style.fontWeight = "bold";
});
p.addEventListener("mouseout", function() {
    p.style.fontWeight = "normal";
});

let i = document.getElementById("textInput");
i.addEventListener("input", function() {
    document.getElementById("displayText").innerText = i.value;
});

let f = document.getElementById("backgroundChange");
f.addEventListener("change", function() {
    document.body.style.backgroundColor = f.value;
});