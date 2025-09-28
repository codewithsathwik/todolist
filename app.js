document.addEventListener("DOMContentLoaded", () => {
    let addBtn = document.querySelector(".add-task .btn");
    let delBtn = document.querySelector(".task button");
    let addTo = document.querySelector(".task-list");
    let TaskArray = JSON.parse(localStorage.getItem("tasks")) || [];

    TaskArray.forEach(task => {
        renderFromLocalSTorage(task);
    });

    addBtn.addEventListener("click", function () {
        let newTask = document.querySelector(".add-task input").value.trim();
        if (newTask === "")
            return;
        const taskObj = {
            id: Date.now(),
            text: newTask,
            isCompleted: false,
        };
        TaskArray.push(taskObj);
        saveToLocalStorage();
        renderFromLocalSTorage(taskObj);
        document.querySelector(".add-task input").value = "";
    })


    function saveToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(TaskArray));
    }


    function renderFromLocalSTorage(task) {
        const li = document.createElement("li");
        li.setAttribute('data-id',task.id);
        li.innerHTML = `<p>${task.text}</p>
                <button class="btn btn-del">Delete</button>`;
        li.classList.add("task");
        addTo.append(li);
    }
})