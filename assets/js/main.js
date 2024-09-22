//1. lay du lieu tu thanh add task
//2. khoi tao the li trong the ul voi noi dung vua tao
//3. day the li vao cap the ul

const inputTask = document.getElementById('inp');
const inputAdd = document.getElementById('add');
const checkTask = document.getElementById('check-btn');
const taskList = document.querySelector('.task-list');
function createElm() {
    let item = document.createElement('li');
    item.classList.add('task-list-item');
    //khoi tao the span
    let pText = document.createElement('p');
    pText.classList.add('task-content');
    let textNode = document.createTextNode(inputTask.value);
    pText.appendChild(textNode);
    let deleteSpan = document.createElement("span");
    deleteSpan.innerHTML = '\u00d7';
    item.appendChild(pText);
    item.appendChild(deleteSpan);
    // Tạo thẻ <li> mới
    //them item vao the ul
    taskList.appendChild(item);
    inputTask.value = "";
    saveTask();
}

//event click add task
inputAdd.addEventListener('click', function (e) {
    if (inputTask.value == '') {
        alert("Please enter your task!");
    }
    else {
        e.preventDefault();
        //khoi tao the li
        createElm();
        //reset add task
        inputTask.value = '';

    }
});

taskList.addEventListener('click', function(e) {
    if (e.target.tagName === "LI" || e.target.tagName === 'P') {
        e.target.classList.toggle('checked');
        saveTask();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }

}, false);
// inputCheck.addEventListener('change', function() {
//     if (inputCheck.checked) {
//         rulerRemove.style.display = 'block'; 
//     } else {
//         rulerRemove.style.display = 'none';
//     }
// });
// deleteDiv.addEventListener('click', function() {
//     taskList.removeChild(item);
// })
// //tao ham luu du lieu cua the ul vao local storage

function saveTask () {
    localStorage.setItem('data', taskList.innerHTML);
}
function getTask() {
    taskList.innerHTML = localStorage.getItem('data');
}
getTask();
