const text = document.getElementById("text");

function changeText() {
	text.innerText = "Breath Out!";
	setTimeout(() => {
		text.innerText = "Breath in!";
	}, 4000);
	setTimeout(() => {
		text.innerText = "HOLD";
	}, 8000);
}
changeText();
setInterval(changeText, 10000);
