const taskList = document.getElementById("taskList");
// console.log(taskList);
taskList.addEventListener(
  "click",
  function (event) {
    //jika button diklik
    if (event.target.className === "deleteButton") {
      // ambil parent element dari button yang diklik
      const task = event.target.parentElement;
      // menghapus keseluruhan element task yaitu li yang buttonnya diklik
      taskList.removeChild(task);
      // pemberitahuan bahwa task yang dipilih sudah dihapus pada log
      console.log(`Task "${task.firstChild.textContent.trim()}" sudah dihapus`);
      // penggunaan trim() untuk menghilangkan \n dan spasi pada textContent
    }
  },
  false
); //bubbling phase
