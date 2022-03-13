const allModals = document.querySelectorAll('.popup-open');

const showModalScheme = (itemSelector, showSelector, closeSelector) => {
    const item = document.querySelector(itemSelector),
          show = document.querySelector(showSelector),
          close = document.querySelector(closeSelector);
          
    item.onclick = () => {
        allModals.forEach(elem => {
            if (elem.classList.contains('active-popup')) {
                elem.classList.remove('active-popup');
                show.classList.add('active-popup');
            } else {
                show.classList.add('active-popup');
            }
        });
    };

    show.addEventListener('click', (e) => {
		if (e.target === show) {
			show.classList.remove('active-popup');
            item.classList.remove('active-icon');
		}
	});
    
    close.onclick = () => {
        allModals.forEach(elem => {
            elem.classList.remove('active-popup');
        });
        item.classList.remove('active-icon');
    }

};

showModalScheme('.translate-icon', '.popup-languages', '.popup-languages .popup-header-close-icon');
showModalScheme('.file-icon', '.popup-notes', '.popup-notes .popup-header-close-icon');
showModalScheme('.plus-icon', '.popup-to-do', '.popup-to-do .popup-header-close-icon');
showModalScheme('.settings-icon', '.popup-settings', '.popup-settings .popup-header-close-icon');

const modalMore = () => {
    const moreIcoAll = document.querySelectorAll('.open-more-link');
    const openMore = document.querySelector('.popup-view-more');
    const close = document.querySelector('.popup-view-more .popup-header-close-icon');

    moreIcoAll.forEach(item => {
        item.onclick = () => {
            openMore.classList.add('active-popup');
        };
    });

    close.onclick = () => {
        openMore.classList.remove('active-popup');
    }

    openMore.onclick = (e) => {
        if (e.target === openMore) {
			openMore.classList.remove('active-popup');
		}
    };
};

modalMore();
