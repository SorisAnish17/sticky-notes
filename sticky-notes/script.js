document.addEventListener("DOMContentLoaded", function () {
  let all_notes = document.querySelectorAll("li a");

  all_notes.forEach(function (note) {
    note.addEventListener("keyup", function () {
      let note_title = this.querySelector("h2").textContent;
      let note_content = this.querySelector("p").textContent;

      let item_key =
        "list_" +
        Array.prototype.indexOf.call(
          this.parentNode.parentNode.children,
          this.parentNode
        );

      let data = {
        title: note_title,
        content: note_content,
      };

      window.localStorage.setItem(item_key, JSON.stringify(data));
    });
  });

  all_notes.forEach(function (note, index) {
    let data = JSON.parse(window.localStorage.getItem("list_" + index));

    if (data !== null) {
      let note_title = data.title;
      let note_content = data.content;

      note.querySelector("h2").textContent = note_title;
      note.querySelector("p").textContent = note_content;
    }
  });
});
