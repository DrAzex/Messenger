
const showDropdown = (linkSelector, dropdownSelector) => {
    const link = document.querySelector(linkSelector),
        dropdown = document.querySelector(dropdownSelector);

    link.addEventListener('click', (e) => {
        dropdown.classList.toggle('active-dropdown');
        e.stopPropagation();
    });

    window.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.remove('active-dropdown');
    })
};

showDropdown('.all-chats-box', '.all-chats-dropdown');
showDropdown('.icon-menu', '.more-dropdown');

const searchIco = document.querySelectorAll('.search-open');
const searchOpen = document.querySelectorAll('.top-search-input');

searchIco.forEach(item => {
    item.onclick = () => {
        searchOpen.forEach(elem => {
            elem.classList.toggle('active-dropdown');
        });
    };
});

const moreIcoAll = document.querySelectorAll('.more-dropdown-top');
const dropdownMore = document.querySelectorAll('.dropdown-more-top');

moreIcoAll.forEach(element => {
    element.onclick = (e) => {
        window.addEventListener("click", function (e) {
            e.stopPropagation();
            dropdownMore.forEach(tn => {
                tn.classList.remove('active-dropdown');
            });
        });
        dropdownMore.forEach(item => {
            item.classList.add('active-dropdown');
        });
        e.stopPropagation();
    };
});

const smile = document.querySelectorAll('.footer-smile');
const smileBox = document.querySelectorAll('.smile-box');

smile.forEach(el => {
    el.onclick = () => {
        smileBox.forEach(sn => {
            sn.classList.toggle('active-dropdown');
        });
    };
});
