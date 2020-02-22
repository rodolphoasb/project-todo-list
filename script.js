// const todoInput = document.getElementById('input');
// const ul = document.querySelector('ul');

// const addTodo = () => {
//     if (todoInput.value.length > 0) {
//         ul.innerHTML += 
//         `
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//             <span>${todoInput.value.trim()}</span>
//             <i class="far fa-trash-alt delete"></i>
//         </li>
//         `;
//         todoInput.value = '';
//     }
// };

// todoInput.addEventListener("keypress", event => {
//     if (event.keyCode === 13) {
//       addTodo();
//       event.preventDefault();
//     }
// });

// Versão 2

const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const addTodo = () => {
    if (addForm.add.value.length) {
        todos.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${addForm.add.value.trim()}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
        `;
        addForm.add.value = '';
    }
};

const deleteTodo = e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
};

const searchTodo = (term) => {
    Array.from(todos.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => {todo.classList.add('filtered')});

    Array.from(todos.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => {todo.classList.remove('filtered')});
};

addForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});

todos.addEventListener('click',deleteTodo);

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    searchTodo(term);
});
