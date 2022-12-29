document.getElementById("start").addEventListener("click",speak);

function speak() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.querySelector("textarea").value;
    msg.rate = 0.7;
    msg.pitch = 1;
    window.speechSynthesis.speak(msg);
}