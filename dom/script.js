let b = document.getElementById("magicButton");
b.addEventListener("click", function() {
    document.getElementById("heading").innerText = "Magic Happened!";
    document.body.style.backgroundColor = "lightblue";
});

function sayhello() {
    let count = 0;
    count++;
    console.log(count);
    if (count == 2) {
        document.getElementById("heading").innerText = "Magic Happened!";
    } else {
        document.getElementById("heading").innerText = "Click button for magic";
    }
}