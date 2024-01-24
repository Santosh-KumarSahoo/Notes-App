const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inp-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=> {
  let inpBox = document.createElement("p");
  let img = document.createElement("img");
  inpBox.className = "inp-box";
  inpBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inpBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if(e.target.tagName === "p") {
    notes = document.querySelectorAll(".inp-box");
    notes.forEach(notes => {
      notes.opKeyup = function() {
        updateStorage();
      }
    });
  }
});

document.addEventListener("keydown", event => {
  if(event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});