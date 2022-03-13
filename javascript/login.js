const mailSignIn = document.querySelector('.mail-sign-in');
const passwordSignIn = document.querySelector('.password-sign-in');

// Btn
const signInBtn = document.querySelector('.btn-sign-in');

// localStorage

const userMail = localStorage.getItem('usermail');
const userPassword = localStorage.getItem('userpassword');


const userLogin = () => {
	signInBtn.onclick = () => {
		if (mailSignIn.value == userMail && passwordSignIn.value == userPassword) {
			window.location.href = ('home/index.html');
		}
		else {
			alert('Пароль или майл введен непавильно!')
		}
	}
}

userLogin();