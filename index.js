const mainEl = document.querySelector(".main");
const passwordEl = document.createElement("input");
passwordEl.classList.add("password");
passwordEl.setAttribute("placeholder", "Сгенерироварть пароль");
passwordEl.addEventListener("keypress", (e) => {
	e.preventDefault();
});
mainEl.appendChild(passwordEl);
passwordEl.addEventListener("focus", (e) => {
	navigator.clipboard.writeText(passwordEl.value);
});

const copyBtn = document.createElement("button");
copyBtn.classList.add("password-button");
copyBtn.innerText = "Скопировать";
copyBtn.addEventListener("click", (e) => {
passwordEl.select();
passwordEl.setSelectionRange(0, 99999);
navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement("button");
generateBtn.classList.add("password-button");

generateBtn.innerText = "Сгенерировать";
generateBtn.addEventListener("click", (e) => {
	let password = generatePassword(12);
   console.log(password);
	passwordEl.value = password;
});
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);

function generatePassword(passwordLength) {
	const numberChars = "0123456789";
	const upperChars = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
	const lowerChars = "abcdefghijklmnoprstuvwxyz";
	const symbolChars = "!@#$%^&*()_+";
	const allChars = numberChars + upperChars + lowerChars + symbolChars;
	let randomString = "";
	for (let i = 0; i < passwordLength; i++) {
		let randomNumber = Math.floor(Math.random() * allChars.length);
		randomString += allChars[randomNumber];
	}
	return randomString;
}
