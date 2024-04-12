document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Menghentikan default behavior form submit

        const taskText = taskInput.value.trim(); // Mendapatkan teks tugas dan menghapus spasi di awal dan akhir

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="btn btn-sm btn-success mr-2 markDone">Selesai</button>
                    <button class="btn btn-sm btn-danger deleteTask">Hapus</button>
                </div>
            `;

            taskList.appendChild(taskItem);

            taskInput.value = ""; // Mengosongkan input setelah tugas ditambahkan
        }
    });

    taskList.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("markDone")) {
            const taskItem = target.closest(".list-group-item");
            taskItem.classList.toggle("done"); // Menandai tugas sebagai selesai
        } else if (target.classList.contains("deleteTask")) {
            const taskItem = target.closest(".list-group-item");
            taskItem.remove(); // Menghapus tugas dari daftar
        }
    });
});
