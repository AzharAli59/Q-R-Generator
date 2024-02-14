let text = document.getElementById("demo");
let image = document.getElementById("img");

function generate() {
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
}
