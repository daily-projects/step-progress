const chooseTitle = document.querySelector('.choose-title');
const chooseDescription = document.querySelector('.choose-description');
const confirmData = document.querySelector('.confirm-data');
const backButton = document.querySelector('.back-button');
const submitButton = document.querySelector('.submit-button');
const article = document.querySelector('article');

const submitButtonStates = {
	first: 'Submit title',
	second: 'Submit description',
	third: 'Yes, go ahead!',
	fourth: '',
}



submitButton.addEventListener('click', () => {
	if (submitButton.textContent === submitButtonStates.first) {
		secondScreenUpdate();
		return;
	}

	if (submitButton.textContent === submitButtonStates.second) {
		thirdScreenUpdate();
		return;
	}

	if (submitButton.textContent === submitButtonStates.third) {
		submitButton.classList.add('hide');
		backButton.classList.add('hide')
		article.textContent = 'Ok, we are done. Thanks for sending us your data!';
		return;
	}
})

backButton.addEventListener('click', () => {
	if (submitButton.textContent === submitButtonStates.second) {
		firstScreenUpdate();
		return;
	}

	if (submitButton.textContent === submitButtonStates.third) {
		secondScreenUpdate();
		return;
	}
})

chooseDescription.addEventListener('click', () => {
	secondScreenUpdate();
})

chooseTitle.addEventListener('click', () => {
	firstScreenUpdate();
})

confirmData.addEventListener('click', () => {
	if (chooseDescription.classList.contains('active') && !confirmData.classList.contains('active')) {
		thirdScreenUpdate();
	}
})

function firstScreenUpdate() {
	submitButton.textContent = submitButtonStates.first;
	backButton.classList.add('hide');
	submitButton.classList.remove('hide');
	confirmData.classList.remove('active');
	chooseDescription.classList.remove('active');
	confirmData.classList.remove('active');
	article.textContent = 'Choose title content';
}


function secondScreenUpdate() {
	submitButton.textContent = submitButtonStates.second;
	backButton.classList.remove('hide');
	submitButton.classList.remove('hide');
	chooseDescription.classList.add('active');
	confirmData.classList.remove('active');
	backButton.textContent = 'Back';
	article.textContent = 'Choose description content';
}

function thirdScreenUpdate() {
	submitButton.textContent = submitButtonStates.third;
	confirmData.classList.add('active');
	backButton.textContent = 'No, go back';
	article.textContent = 'Are you happy now?';
}
