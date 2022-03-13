const filterContact = (dropdownLink, allContact, openContact, flex) => {
    const link = document.querySelector(dropdownLink),
        contact = document.querySelectorAll(allContact);

        link.onclick = () => {
            contact.forEach(item => {
            if (item.classList.contains(openContact)) {
                item.style.display = flex;
            } else {
                item.style.display = 'none';
            }
        });
    };
};

filterContact('.all-chats', '.my-contact', 'my-contact', 'flex');
filterContact('.friends-chat', '.my-contact', 'friends', 'flex');
filterContact('.groups', '.my-contact', 'group-contact', 'flex');
filterContact('.unread-chats', '.my-contact', 'unread', 'flex');
filterContact('.archived-chats', '.my-contact', 'archived', 'flex');

// Main contact

filterContact('.catharine', '.main', 'catharine', 'block');
filterContact('.group', '.main', 'group', 'block');

const backIco = document.querySelectorAll('.back-box');
const mainAll = document.querySelectorAll('.main');

backIco.forEach(el => {
    el.onclick = () => {
        mainAll.forEach(i => {
            i.style.display = 'none';
        });
    };
});