//1. lay du lieu tu thanh add task
//2. khoi tao the li trong the ul voi noi dung vua tao
//3. day the li vao cap the ul

let inputTask = document.getElementById('inp');
let inputAdd = document.getElementById('add');
let checkTask = document.getElementById('check-btn');
let taskList = document.querySelector('.task-list');
function createElm() {
    let item = document.createElement('li');
    item.classList.add('task-list-item');
    let inputCheck = document.createElement('input');
    inputCheck.id = 'check-btn';
    inputCheck.type = 'checkbox';
    //khoi tao the span
    let spanText = document.createElement('span');
    spanText.classList.add('task-content');
    let textNode = document.createTextNode(inputTask.value);
    spanText.appendChild(textNode);
    let rulerRemove = document.createElement('div');
    rulerRemove.classList.add('remove-ruler');
    spanText.appendChild(rulerRemove);
    let deleteDiv = document.createElement("div");
    deleteDiv.classList.add("delete-icon");
    var icon = document.createElement("i");
    icon.classList.add("ti-close"); // sử dụng icon từ thư viện themify
    deleteDiv.appendChild(icon);
    item.appendChild(inputCheck);
    item.appendChild(spanText);
    item.appendChild(deleteDiv);
    // Tạo thẻ <li> mới
    //them item vao the ul
    taskList.appendChild(item);
    //event checkbox
    inputCheck.addEventListener('change', function() {
        if (inputCheck.checked) {
            // Nếu checkbox được chọn, thay đổi thuộc tính của remove-ruler
            rulerRemove.style.display = 'block'; // Ví dụ thay đổi màu nền
        } else {
            // Nếu checkbox không được chọn, khôi phục thuộc tính ban đầu
            rulerRemove.style.display = 'none'; // Trở lại trạng thái ban đầu
        }
    });
    deleteDiv.addEventListener('click', function() {
        taskList.removeChild(item);
    })
}
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

