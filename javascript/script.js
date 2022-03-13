const signUpBtn = document.querySelector('.btn-sign-up');
const userName = document.querySelector('.name-sign-up');
const userMail = document.querySelector('.mail-sign-up');
const userPassword = document.querySelector('.password-sign-up');

const signUp = () => {
	signUpBtn.onclick = () => {
		localStorage.setItem('username', userName.value);
		localStorage.setItem('usermail', userMail.value);
		localStorage.setItem('userpassword', userPassword.value);
		window.location.href = ('signin.html');
	}
}

signUp();