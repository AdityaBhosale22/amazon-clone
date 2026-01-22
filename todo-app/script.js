let todo = ["todo1", "todo2", "todo3"];
let progress = ["progress1", "progress2", "progress3"];
let done = ["done1", "done2", "done3"];

let todoCol = document.getElementById("todo");
let progressCol = document.getElementById("progress");
let doneCol = document.getElementById("done");

function renderTodo() {
    let html = "<h1>TODO</h1>";
    todo.forEach((item, index) => {
        html += `
    <div class="task">
            <p>${item}</p>
            <button class="move-to-progress" onclick="shiftToRight('todo', ${index})">Move to Progress</button>
        </div>
    `
    })
    todoCol.innerHTML = html;
}
function renderProgress() {
    let html = "<h1>PROGRESS</h1>";
    progress.forEach((item, index) => {
        html += `
    <div class="task">
            <p>${item}</p>
            <button class="move-to-done" onclick="shiftToRight('progress', ${index})">Move to Done</button>
        </div>
    `
    })
    progressCol.innerHTML = html;
}
function renderDone() {
    doneCol.innerHTML = "<h1>DONE</h1>";
    done.forEach((item, index) => {
        doneCol.innerHTML += `
    <div class="task">
            <p>${item}</p>
            <button class="move-to-progress" onclick="shiftToLeft('done', ${index})">Move to Progress</button>
        </div>
    `
    })
}


function shiftToRight(colName, index) {
    if (colName === 'todo') {
        let itemToBePushed = todo[index];
        todo = todo.filter((item, idx) => idx != index);
        console.log("array after pushing", todo, itemToBePushed);
        renderTodo();
        progress.push(itemToBePushed);
        renderProgress();
    }
    else if (colName === 'progress') {
        let itemToBePushed = progress[index];
        progress = progress.filter((item, idx) => idx != index);
        console.log("array after pushing", progress, itemToBePushed);
        renderProgress();
        done.push(itemToBePushed);
        renderDone();
    }
}

function shiftToLeft(colName, index) {
    if (colName === 'done') {
        let itemToBePushed = done[index];
        done = done.filter((item, idx) => idx !== index);
        console.log("array after pushing", done, itemToBePushed);
        renderDone();
        progress.push(itemToBePushed);
        renderProgress();
    }
    else if (colName === 'progress') {
        let itemToBePushed = progress[index];
        progress = progress.filter((item, idx) => idx !== index);
        console.log("array after pushing", progress, itemToBePushed);
        renderProgress();
        todo.push(itemToBePushed);
        renderTodo();
    }
}



renderTodo();
renderProgress();
renderDone();

