const showMainMessege = (linkSelector, allMain, allChats, classSelector, topBoxSelector) => {

    const link = document.querySelector(linkSelector),
        main = document.querySelectorAll(allMain),
        chats = document.querySelectorAll(allChats),
        topBox = document.querySelector(topBoxSelector);


        link.onclick = () => {

            if (topBox.classList.contains(classSelector)) {
                topBox.style.display = 'none';
            } else {
                topBox.style.display = 'block';
            }

            main.forEach(item => {
                if(item.classList.contains(classSelector)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            chats.forEach(element => {
                if(element.classList.contains(classSelector)) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        };
};



showMainMessege('.link-defualt', '.main', '.chat-box-bottom', 'defualt-open', '.chats-box-top');
showMainMessege('.link-calls', '.main', '.chat-box-bottom', 'calls-open', '.chats-box-top');
showMainMessege('.link-friends', '.main', '.chat-box-bottom', 'friends-open', '.chats-box-top');
showMainMessege('.link-settings', '.main', '.chat-box-bottom', 'profile-open', '.chats-box-top');

const openTask = () => {
    const allText = document.querySelectorAll('.check-title');
    const openTask = document.querySelector('.popup-open-task');
    const closeIco = document.querySelector('.popup-open-task .popup-header-close-icon');
    const btnClose = document.querySelector('.btn-close-footer');

    allText.forEach(item => {
        item.onclick = () => {
            openTask.classList.add('active-popup');
        };

        closeIco.onclick = () => {
            openTask.classList.remove('active-popup');
        }

        openTask.onclick = (e) => {
            if (e.target === openTask) {
                openTask.classList.remove('active-popup');
            };
        };

        btnClose.onclick = () => {
            openTask.classList.remove('active-popup');
        };
    });
};

openTask();

