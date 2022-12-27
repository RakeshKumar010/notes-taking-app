let topic = document.getElementById('topic');
let note = document.getElementById('note');

let wtopic;
let wnote;

function dataFtch() {
  wtopic = topic.value;
  wnote = note.value;
  localStorage.setItem(wtopic, wnote);
  alert("successful")
  window.close()

}

note.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
event.preventDefault();
document.getElementById("btn").click();
}
});