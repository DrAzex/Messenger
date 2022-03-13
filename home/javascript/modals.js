const bindModal = (triggerSelector, modalSelector, closeSelector) => {
	const trigger = document.querySelector(triggerSelector),
		modal = document.querySelector(modalSelector),
		close = document.querySelector(closeSelector);

	trigger.addEventListener('click', (e) => {
		modal.style.display = 'block';
	});

	close.addEventListener('click', () => {
		modal.style.display = 'none';
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.style.display = 'none';
		}
	});
};

bindModal('.icon-bells', '.popup-overley', '.popup-overley .popup-header-close-icon');
bindModal('.links-new-chat', '.popup-new-chat', '.popup-new-chat .popup-header-close-icon');
bindModal('.links-create-group', '.popup-create-group', '.popup-create-group .popup-header-close-icon');
bindModal('.links-invite-others', '.popup-invite-others', '.popup-invite-others .popup-header-close-icon');
bindModal('.btn-start', '.popup-new-chat', '.popup-new-chat .popup-header-close-icon');