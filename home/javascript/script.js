const activeHover = (linkSelector, classSelector) => {
    const link = document.querySelectorAll(linkSelector);

    link.forEach(item => {
        item.addEventListener('click', (e) => {
            link.forEach(element => {
                if (element.classList.contains(classSelector)) {
                    element.classList.remove(classSelector);
                    item.classList.add(classSelector);
                } else {
                    item.classList.add(classSelector);
                }
            });
        });
    });
};

activeHover('.my-contact', 'active-chat');
activeHover('.icons-footer', 'active-icon');
activeHover('.icons-contact', 'active-icon-header');


const checkSettings = (checkboxSelector, checkboxItem) => {

    const checkbox = document.querySelector(checkboxSelector),
        checkItem = document.querySelector(checkboxItem);

    checkbox.onclick = () => {
        checkItem.classList.toggle('active-check');
        checkbox.classList.toggle('active-box');
    };

};

checkSettings('.settings-1', '.item-1');
checkSettings('.settings-2', '.item-2');
checkSettings('.settings-3', '.item-3');
checkSettings('.settings-4', '.item-4');
checkSettings('.settings-5', '.item-5');
checkSettings('.settings-6', '.item-6');
checkSettings('.settings-7', '.item-7');
checkSettings('.settings-8', '.item-8');
checkSettings('.settings-9', '.item-9');

const todoList = (checkSelector, textSelector) => {
    const check = document.querySelector(checkSelector),
          text = document.querySelector(textSelector);

          check.onclick = () => {
            text.classList.toggle('active-text');
    };
};

todoList('.box-todo-1', '.title-1');
todoList('.box-todo-2', '.title-2');
todoList('.box-todo-3', '.title-3');
todoList('.box-todo-4', '.title-4');
todoList('.box-todo-5', '.title-5');
todoList('.box-todo-6', '.title-6');
todoList('.box-todo-7', '.title-7');
todoList('.box-todo-8', '.title-8');
todoList('.box-todo-9', '.title-9');
todoList('.box-todo-10', '.title-10');